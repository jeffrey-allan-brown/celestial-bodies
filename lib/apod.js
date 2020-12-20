const axios = require('axios');
const validator = require('validator');

//
// Astronomy Picture of the Day //
//

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

module.exports.apod = apod;