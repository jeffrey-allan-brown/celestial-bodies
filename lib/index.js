const axios = require('axios');
const { response } = require('express');
/*

#### Usage
const celestial-bodies = require('celestial-bodies');
https://api.nasa.gov/planetary/apod?api_key=ofmobU4wrsnPlHaeSQUngj5xgofeEvZ8Hf0SE81X
// ofmobU4wrsnPlHaeSQUngj5xgofeEvZ8Hf0SE81X

*/

// Astronomy Picture of the Day //



function apod(params, callback) {
	const request = 'https://api.nasa.gov/planetary/apod?api_key=' + params.key + '&date=' + params.date + '&hd=' + params.hd;
	axios(request)
    .then(function (response) {
    	return response;
  	})
  	.catch(function (error) {
    	return error;
  	})
  	.then(function () {
    	return callback(response);
  	});
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