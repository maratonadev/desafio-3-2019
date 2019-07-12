const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '../.env') });
const languageTranslatorv3 = require('ibm-watson/language-translator/v3')

const languageTranslator = new languageTranslatorv3({
  version: '2019-04-04',
  iam_apikey: process.env.IAM_APIKEY_LANGUAGE_TRANSLATOR
});

exports.translate = (req, res) => {
  return new Promise((resolve, reject) => {
    const translateParams = {
      text: req.body.text,
      model_id: 'pt-en',
    };
    languageTranslator.translate(translateParams)
      .then(translationResult => {
        res.status(200).json({ translation: translationResult });
        console.log(JSON.stringify(translationResult, null, 2));
      })
      .catch(err => {
        res.status(400).json({ error: 'some error has ocurred' });
        console.error('error: ', err);
      });
  });

}
