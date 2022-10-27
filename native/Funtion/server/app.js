const express = require('express');
const { urlencoded, json } = require('body-parser');

const app = express();

app.use(urlencoded({ extended: true }));
app.use(json());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST|GET');
  next();
});

app.post('/transfer', (req, res) => {
  let _c = req.body.code;
  _c = _c.replace(/let|const/g, 'var');
  res.send(_c);
});

app.listen(8080);