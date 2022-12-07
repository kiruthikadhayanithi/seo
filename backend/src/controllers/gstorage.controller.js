const uploadFile = require('../middlewares/localupload.js');

const upload = async (req, res) => {
  try {
    await uploadFile(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: 'Please upload a file!' });
    }

    const fileimage = req.file.originalname;
    const imagesave = fileimage.split(' ').join('');

    res.status(200).send({
      message: 'Uploaded the file successfully',
      link: '/assets/' + imagesave,
    });
  } catch (err) {
    console.log(err);
    if (err.code == 'LIMIT_FILE_SIZE') {
      console.log('uploading test');
      return res.status(500).send({
        message: 'File size cannot be larger than 20MB!',
      });
    }

    res.status(500).send({
      message: `Could not upload the file: ${fileimage}. ${err}`,
    });
  }
};

module.exports = {
  upload,
};
