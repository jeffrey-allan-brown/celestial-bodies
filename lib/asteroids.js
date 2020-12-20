const axios = require('axios');
const validator = require('validator');

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

module.exports.asteroids = asteroids;