const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const multer = require('multer');
const fs = require('fs');
const VisualRecognitionV3 = require('ibm-watson/visual-recognition/v3')

const visualRecognition = new VisualRecognitionV3({
  version: '2019-05-19',
  iam_apikey: process.env.IAM_APIKEY_VISUAL_RECOGNITION
});

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, '')
  },
  filename: (req, file, callback) => {
    callback(null, 'file.png');
  }
})

const upload = multer({
  storage: storage,
  fileFilter: fileFilter
}).single("image")


const ClassifyFiles = (req, res) => {
  return new Promise((resolve, reject) => {
    const classifyParams = {
      images_file: fs.readFileSync('./file.png'),
      classifier_ids: [process.env.CLASSIFIER_ID]
    };

    visualRecognition.classify(classifyParams)
      .then(response => {
        console.log('aqui', response)
        if (response != null && response != undefined) {
          ClassifiedImages = response;
          console.log(ClassifiedImages.images[0].classifiers[0]);
          if (ClassifiedImages.images[0].classifiers[0].classes.length > 0) resolve(ClassifiedImages);
          else {
            ClassifiedImages.images[0].classifiers[0] = {
              classifier_id: "None",
              name: "None",
              classes: [{class: "No class detected", score: 0.0}]
            }
            resolve(ClassifiedImages);
          }
        } else {
          ClassifiedImages = { empty: true };
          resolve(ClassifiedImages);
        }
      })
      .catch(err => {
        console.log('error:', err);
        reject(err);
      });
  });

}

exports.file_upload = (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      console.log(err)
      res.status(500).send({ err: true, msg: "Storage error." })
    } else if (err) {
      console.log(err)
      res.status(500).send({ err: true, msg: "Unknown error." })
    } else {
      ClassifyFiles().then(data => res.status(200).send(data)).catch(err => res.status(500).send(err));
    }
    if (res.status(200)) {
      fs.unlinkSync('./file.png');
    }
  })
}

function fileFilter(_, file, cb) {
  if (file.mimetype == 'image/png' || file.mimetype == 'image/jpg' || file.mimetype == 'image/jpeg') {
    cb(null, true)
  } else {
    cb(null, false)
  }
}
