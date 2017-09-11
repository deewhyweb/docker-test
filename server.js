'use strict';

const express = require('express');
var hello = require('./lib/hello');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  hello.hello();
  res.send('Hello world edited again\n');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);