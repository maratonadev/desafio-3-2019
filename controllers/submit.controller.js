const request = require('request')
exports.validad3 = (req, res) => {
  const cpf = (req.body.cpf != undefined) ? req.body.cpf : null;
  if (cpf) {
    const body = {
      id: process.env.MARATONA_ID,
      cpf: cpf,
      api_key_vr: process.env.IAM_APIKEY_VISUAL_RECOGNITION,
      classifier_id: process.env.CLASSIFIER_ID,
      api_key_lt: process.env.IAM_APIKEY_LANGUAGE_TRANSLATOR,
      desafio: process.env.DESAFIO
    };

    console.log(body)
    if (!body) {
      res.status(404).json({
        msg: 'Something is missing'
      })
    } else {
      request({
        uri: 'https://8d829621.us-south.apiconnect.appdomain.cloud/desafios/desafio3',
        body: body,
        json: true,
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        }
      }, function (err, response) {
        if (err || response.body.error) {
          console.log(response.body.error, err);
          res.status(500).json({
            msg: 'Something is wrong, contact support.'
          });
        } else {
          res.status(201).json({
            msg: response.body
          });
        }
      });
    }
  }
  else res.status(404).json({
    msg: 'Something is missing'
  });
}
