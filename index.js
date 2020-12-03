const express = require('express');
const app = express();
const port = process.env.PORT || '3000';

const api = require('./lib/index.js');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/apod', function (response) {
	const parameters = {
		key: 'ofmobU4wrsnPlHaeSQUngj5xgofeEvZ8Hf0SE81X',
		date: '2020-11-20',
		hd: 'false'
	};
    api.apod(parameters, function(response) {
		console.log(response);
		return 200;
    });
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});