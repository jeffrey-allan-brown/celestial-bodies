const express = require('express');
const app = express();
const port = process.env.PORT || '3000';

const api = require('./lib/index.js');

app.get('/apod', (req, res) => {
  api.apod('ofmobU4wrsnPlHaeSQUngj5xgofeEvZ8Hf0SE81X','','');
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});