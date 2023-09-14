const express = require('express');
const app = express();
const port = 3000;

app.get('/test', (req, res) => {
  res.send({'hello':'world'});
});

app.listen(port, () => { });

module.exports = app;

