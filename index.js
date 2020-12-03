var http = require('http');
const port = process.env.PORT || '3000';
const api = require('./lib/index.js');

const parameters = {
	key: 'ofmobU4wrsnPlHaeSQUngj5xgofeEvZ8Hf0SE81X',
	date: '2020-11-10',
	hd: 'false'
};

http.createServer(function (req, res) {
	const apiCall = api.apod(parameters, function(response) {
  		console.log(response);
	});
  	res.writeHead(200, {'Content-Type': 'text/html'});
}).listen(port, () => {console.log(`Celestial Bodies is listening at http://localhost:${port}`)}); 