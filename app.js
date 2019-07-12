const path = require("path")
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const visual_recognition_router = require('./routes/visual-recognition-routes.route');
const language_translator_router = require('./routes/lt.route');
const submit = require('./routes/submit.route');
const app = express();
app.set('port', process.env.PORT || 8080);

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/api/v1/visual-recognition', visual_recognition_router);
app.use('/api/v1/lang/', language_translator_router);
app.use('/api/v1/', submit);

app.use("/", express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(app.get('port'), '0.0.0.0', () => {
  console.log(`Server starting on => ${app.get('port')} `);
})
