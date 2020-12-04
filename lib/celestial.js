const axios = require('axios');
/*

#### Usage
const celestial-bodies = require('celestial-bodies');
https://api.nasa.gov/planetary/apod?api_key=ofmobU4wrsnPlHaeSQUngj5xgofeEvZ8Hf0SE81X
*/

// Astronomy Picture of the Day //
function apod(payload, callback) {
	const request = 'https://api.nasa.gov/planetary/apod?api_key=' + payload.global.key + '&date=' + payload.apod.date + '&hd=' + payload.apod.hd;
	return axios(request)
    .then((response) => {
      callback(response.data);
    })
  	.catch(function (error) {
      return error;
  	})
  	.then(function () {
      return;
  	});
};

// Near Earth Object Web Service
function asteroids(payload, callback) {
	const request = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + payload.asteroids.start_date + '&end_date=' + payload.asteroids.end_date + '&api_key=' + payload.global.key;
  return axios(request)
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      return error;
    })
    .then(function () {
      return;
    });
};

// Space Weather Database of Notifications, Knowledge, and Information
function donki(payload, callback) {
	const request = '';

}

// Earth Observation Data
function earth(payload, callback) {
	const request = '';

}

module.exports.apod = apod;
module.exports.asteroids = asteroids;
module.exports.donki = donki;
module.exports.earth = earth;