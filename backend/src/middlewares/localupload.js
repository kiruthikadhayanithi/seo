const util = require('util');
const multer = require('multer');
const maxSize = 20 * 1024 * 1024;

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './public/assets/');
  },
  filename: (req, file, cb) => {
    const a = file.originalname;
    const testimage = a.split(' ').join('');
    cb(null, testimage);
  },
});

let uploadFile = multer({
  storage: storage,
  limits: { fileSize: maxSize },
}).single('file');

let uploadFileMiddleware = util.promisify(uploadFile);
module.exports = uploadFileMiddleware;
