// Node Modules
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const http = require('http');
const https = require('https');
const WebSocketServer = require('websocket').server;

// Custom Requires
const { sequelize } = require('../models/index');
const config = require('./config/vars');
const { logger, httpLogger, performanceLogger } = require('./config/logger/morgan');

// routes Requires
const Routes = require('./routes/v1/index');

const app = express();

const server = http.createServer(app);
const wsServer = new WebSocketServer({
  httpServer: server,
  path: '/websocket',
});

const clients = {};

const getUniqueID = () => {
  const s4 = () =>
    Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  return `${s4() + s4()}-${s4()}`;
};

const baseUrl = 'https://stream.asm.saas.broadcom.com/events';

const headers = {
  Accept: 'application/json',
  'X-Asm-Auth': `${config.okta.asmstream}`,
};

const streamingdata = () => {
  const streamdata = https
    .get(baseUrl, { headers }, (stream) => {
      stream
        .on('data', function (data) {
          JSON.stringify(Buffer.from(data));
          Object.keys(clients).forEach((key) => {
            clients[key].sendUTF(data);
          });
          // console.log(data);
        })
        .on('finish', function (data) {
          console.log('----------------------Streaming completed----------------------------', data);
          // return data;
        })
        .on('error', (err) => {
          console.log('-----------------error----------------', err);
          streamdata.destroy();
          setTimeout(() => {
            console.log('1 min loop');
            streamingdata();
          }, 60000);
        });
    })
    .on('error', function (error) {
      console.log(`-----------------------------Streaming data--------------------- ${error.message}`);
    });

  wsServer.on('request', function (request) {
    const userID = getUniqueID();

    const connection = request.accept(null, request.origin);
    clients[userID] = connection;

    connection.on('close', () => {
      delete clients[userID];
    });
  });
};
streamingdata();

// enable cors
app.use(cors());
app.options('*', cors());

app.use(httpLogger);
app.use(performanceLogger);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ limit: '100mb' }));

app.use('/api/v1', Routes);

app.use(express.static(path.resolve('./public')));
app.use('/default', express.static('default'));

app.use(express.static(path.resolve('./public')));
app.use('/assets', express.static('assets'));

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '../../build/index.html'));
});

sequelize
  .sync()
  .then(() => {
    logger.info('DB Connection Successful');
    server.listen(config.app.port, () => {
      logger.info(`Listening to port ${config.app.port}`);
    });
  })
  .catch(() => {
    logger.info('DB Connection Error');
  });
