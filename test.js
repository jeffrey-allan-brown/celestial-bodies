const celestial = require('./lib/celestial');

const parameters = {
	key: 'DEMO_KEY', // required - can include personal API key or leave as DEMO_KEY and it will still work.
	date: '', // optional - will default to today if no value provided
	hd: '' // optional - defaults to false
};

celestial.apod(parameters, response => {
	console.log(response);
});