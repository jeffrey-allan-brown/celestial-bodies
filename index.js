const express = require('express');
const app = express();
const port = process.env.PORT || '3000';

const api = require('./lib/index.js');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/apod', function (response) {
	const parameters = {
		key: '',
		date: '',
		hd: ''
	};
    api.apod(parameters, function(response) {
    	console.log(response);
    });
    return;
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});