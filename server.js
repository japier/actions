const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello API')
});
app.get('/test', (req, res) => {
  res.send({'hello':'world'});
});

app.listen(port, () => { });

module.exports = app;

