const express = require('express');
const path    = require('path');
const config  = require('./config');
const app     = express();

app.use(express.static('./build'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});

var port = process.env.PORT || config.port;
app.listen(port);
