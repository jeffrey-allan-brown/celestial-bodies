const axios = require('axios');
/*

#### Usage
const celestial-bodies = require('celestial-bodies');
https://api.nasa.gov/planetary/apod?api_key=ofmobU4wrsnPlHaeSQUngj5xgofeEvZ8Hf0SE81X
// ofmobU4wrsnPlHaeSQUngj5xgofeEvZ8Hf0SE81X

*/

// Astronomy Picture of the Day //

function apod(key, date, hd) {
	const request = 'https://api.nasa.gov/planetary/apod?api_key=' + key + '&date=' + date + '&hd=' + hd;

	axios.get(request)
  	.then(function (response) {
    	return response.data;
  	})
  	.catch(function (error) {
    	return error;
  	})
  	.then(function () {
    	console.log('done');
  	});
  	return response.data;
};

// Near Earth Object Web Service
function asteroids(key) {
	const endpoint = '';

}

// Space Weather Database of Notifications, Knowledge, and Information
function donki(key) {
	const endpoint = '';

}

// Earth Observation Data
function earth(key) {
	const endpoint = '';

}

exports.apod = apod;