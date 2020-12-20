const axios = require('axios');
const validator = require('validator');


//
// Astronomy Picture of the Day //
function apod(payload, callback) {
  if ((payload.apod.date != '') && (!validator.isDate(payload.apod.date)) || ((payload.apod.hd != '') && (!validator.isBoolean(payload.apod.hd)))) {
    throw new Error('Error: Invalid Payload Format')
    return;
  }
	const request = 'https://api.nasa.gov/planetary/apod?api_key=' + payload.global.key + '&date=' + payload.apod.date + '&hd=' + payload.apod.hd;
	return axios(request)
    .then((response) => {
      callback(response.data);
    })
  	.catch(function (error) {
      throw new Error('Error: ' + error);
      callback(error);
  	})
  	.then(function () {
      return;
  	});
};



//
// Near Earth Object Web Service
function asteroids(payload, callback) {
	if (payload.asteroids.requestType == 'feed') {
    if ((payload.asteroids.feed.start_date != '') && (!validator.isDate(payload.asteroids.feed.start_date)) || (payload.asteroids.feed.end_date != '') && (!validator.isDate(payload.asteroids.feed.end_date))) {
      throw new Error('Error: Invalid Payload Format')
      return;
    }
    const request = 'https://api.nasa.gov/neo/rest/v1/feed?start_date=' + payload.asteroids.feed.start_date + '&end_date=' + payload.asteroids.feed.end_date + '&api_key=' + payload.global.key;
    return axios(request)
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(error);
    })
    .then(function () {
      return;
    });
  } 
  else if (payload.asteroids.requestType == 'lookup') {
    const request = 'https://api.nasa.gov/neo/rest/v1/neo/' + payload.asteroids.lookup.id + '?api_key=' + payload.global.key;
    return axios(request)
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(error);
    })
    .then(function () {
      return;
    });
  }
  else if (payload.asteroids.requestType == 'browse') {
    const request = 'https://api.nasa.gov/neo/rest/v1/neo/browse/?api_key=' + payload.global.key;
    return axios(request)
    .then((response) => {
      callback(response.data);
    })
    .catch(function (error) {
      callback(error);
    })
    .then(function () {
      return;
    });
  } 
  else {
    console.log('err');
  }
};

// Space Weather Database of Notifications, Knowledge, and Information
function donki(payload, callback) {
	const request = '';

}

// Earth Observation Data
function earth(payload, callback) {
	const request = '';

}

// Mars Rover Imagery //
function rover(payload, callback) {
};

module.exports.apod = apod;
module.exports.asteroids = asteroids;
module.exports.donki = donki;
module.exports.earth = earth;
module.exports.rover = rover;