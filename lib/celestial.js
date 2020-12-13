const axios = require('axios');
const validator = require('validator');


//
// Astronomy Picture of the Day //
function apod(payload, callback) {
  if ((payload.apod.date != '') && (!validator.isDate(payload.apod.date)) || ((payload.apod.hd != '') && (!validator.isBoolean(payload.apod.hd)))) {
    throw new Error('Error: Invalid Payload Format. Please confirm proper data type formatting.')
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

//
// Space Weather Database of Notifications, Knowledge, and Information //
function donki(payload, callback) {
	const request = '';

}

//
// Earth Observation Data (Satellite Imagery, Etc.) //
function earth(payload, callback) {
	const request = '';

}

//
// EONET - Earth Observatory Natural Event Tracker Data //
function eonet(payload, callback) {
	const request = '';

}

//
// EPIC - Earth Polychromatic Imaging Camera //
function epic(payload, callback) {
	const request = '';

}

//
// Exoplanet - Programmatic Access to NASA's Exoplanet Database //
function exoplanet(payload, callback) {
	const request = '';

}

//
// GeneLab Database //
function genelab(payload, callback) {
	const request = '';

}

//
// Insight - Mars Weather Service API //
function insight(payload, callback) {
	const request = '';

}

//
// Mars Rover Imagery //
function rover(payload, callback) {
  const request = '';

};

//
// Nasa Image and Video Library //
function library(payload, callback) {
	const request = '';

}

//
// Tech Transfer //
function techtransfer(payload, callback) {
	const request = '';

}

//
// Satellite Situation Center //
function satellite(payload, callback) {
	const request = '';

}

//
// SSD-CNEOS - Solar System Dynamics & Center for Near-Earth Object Studies //
function ssdcneos(payload, callback) {
	const request = '';

}

//
// Techport //
function techport(payload, callback) {
	const request = '';

}

//
// TLE API - Two-Line Element Data for Orbiting Objects //
function tle(payload, callback) {
	const request = '';

}

//
// Vesta/Moon/Mars Trek WMTS //
function wmts(payload, callback) {
	const request = '';

}

module.exports.apod = apod;
module.exports.asteroids = asteroids;
module.exports.donki = donki;
module.exports.earth = earth;
module.exports.eonet = eonet;
module.exports.epic = epic;
module.exports.exoplanet = exoplanet;
module.exports.genelab = genelab;
module.exports.insight = insight;
module.exports.rover = rover;
module.exports.library = library;
module.exports.techtransfer = techtransfer;
module.exports.techport = techport;
module.exports.satellite = satellite;
module.exports.ssdcneos = ssdcneos;
module.exports.tle = tle;
module.exports.wmts = wmts;