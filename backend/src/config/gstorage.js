const Cloud = require('@google-cloud/storage')
const path = require('path')
const serviceKey = path.join(__dirname, './gcpstorage-d6e92e7d7e86.json')
const { Storage } = Cloud
const storage = new Storage({
  keyFilename: serviceKey,
  projectId: 'sbosdtglp-klera',
})

module.exports = storage