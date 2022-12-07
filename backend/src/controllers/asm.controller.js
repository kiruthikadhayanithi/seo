const axios = require('axios');
const config = require('../config/vars');

// const https = require('https');

// const asm = async (req, res) => {
//   const baseUrl = 'https://stream.asm.saas.broadcom.com/events';

//   const headers = {
//     Accept: 'application/json',
//     'X-Asm-Auth': `${config.okta.asmstream}`,
//   };
//   const streamdata = https
//     .get(baseUrl, { headers }, (stream) => {
//       stream.on('data', function (data) {
//         res.write(data);
//         console.log(data);
//       });
//     })
// .on('error', function (e) {
//   res.status(500).send(`Got error: ${e.message}`);
// });
//   req.on('close', function () {
//     streamdata.destroy();
//     console.log('close');
//   });
// };

const folder = async (req, res) => {
  const activefolders = [68224, 68238, 68445, 68248, 68250, 67606, 68260, 68315, 68770];
  const folderdata = await axios({
    url: 'https://api.asm.saas.broadcom.com/v3/folders',
    method: 'get',
    headers: {
      Accept: 'application/json',
      'X-Asm-Auth': `${config.okta.asminitial}`,
      'Content-Type': 'application/json',
    },
  })
    .then((response) => {
      const folderid = [];
      for (let i = 0; i < response.data.length; i += 1) {
        if (activefolders.includes(response.data[i].id)) {
          if (response.data[i].isActive) {
            response.data[i].monitor = [];
            folderid.push(response.data[i]);
          }
        }
      }
      return folderid;
    })
    .then(async (folderResponse) => {
      return await axios({
        url: 'https://api.asm.saas.broadcom.com/v3/monitors',
        method: 'get',
        headers: {
          Accept: 'application/json',
          'X-Asm-Auth': `${config.okta.asminitial}`,
          'Content-Type': 'application/json',
        },
      }).then(async (response) => {
        for (let i = 0; i < response.data.length; i += 1) {
          if (response.data[i].status !== 'deleted' && response.data[i].status !== 'inactive') {
            const folderIndex = folderResponse.findIndex((item) => item.id === response.data[i].folderId);
            if (folderIndex >= 0) {
              folderResponse[folderIndex].monitor.push(response.data[i]);
            }
          }
        }
        return folderResponse;
      });
    })
    .then(async (locationresponse) => {
      return await axios({
        url: 'https://api.asm.saas.broadcom.com/v3/locations/all',
        method: 'get',
        headers: {
          Accept: 'application/json',
          'X-Asm-Auth': `${config.okta.asminitial}`,
          'Content-Type': 'application/json',
        },
      }).then(async (response) => {
        const location = Object.values(response.data);
        for (let i = 0; i < locationresponse.length; i += 1) {
          for (let j = 0; j < locationresponse[i].monitor.length; j += 1) {
            for (let k = 0; k < locationresponse[i].monitor[j].checkpoint.groupIds.length; k += 1) {
              const locationData = location.filter((element) => {
                return element.id === locationresponse[i].monitor[j].checkpoint.groupIds[k];
              });
              if (locationData.length) {
                locationresponse[i].monitor[j].checkpoint.groupIds[k] = locationData[0];
              }
            }
          }
        }

        return locationresponse;
      });
    })
    .catch((err) => {
      return res.status(500).json({ message: err.message });
    });

  res.status(200).send(folderdata);
};

module.exports = { folder };
