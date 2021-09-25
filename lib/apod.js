const axios = require('axios');
const validator = require('validator');

// Astronomy Picture of the Day //
async function apod(payload, callback) {

  if ((payload.date != '') && (!validator.isDate(payload.date)) || ((payload.hd != '') && (!validator.isBoolean(payload.hd)))) {
    throw new Error('Error: Invalid Payload Format. Please confirm proper data type formatting.');
  }

  const request = 'https://api.nasa.gov/planetary/apod?api_key=' + payload.key + '&date=' + payload.date + '&hd=' + payload.hd;
  return axios(request)
  .then((response) => {
    callback(response.data);
    return response.data;
  })
  .catch(function (error) {
    throw new Error('Error: ' + error);
  });
}

module.exports.apod = apod;