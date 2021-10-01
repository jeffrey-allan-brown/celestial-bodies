// import libraries //
const axios = require('axios')
const Joi = require('joi')

// import utilities //
const dateUtils = require('../utils/dates.js')

// neows (near earth object web service) //
function asteroids(payload, callback) {
  let request, start, end, key, type;

  // neo request type is feed //
  if (payload.type == 'feed') {

    // define validation schema //
    const validationSchema = Joi.object({
      end_date: Joi.string().regex(/\d{4}-\d{2}-\d{2}/, { name: 'endDate' }).optional(),
      key: Joi.string().required(),
      start_date: Joi.string().regex(/\d{4}-\d{2}-\d{2}/, { name: 'startDate' }).optional(),
      type: Joi.string().regex(/\w{4,6}/, { name: 'requestType' }).required(),
    })

    type = payload.type;
    key = payload.key;

    // validate the payload input //
    const { error } = validationSchema.validate(payload)
    if (error) throw error

    // payload logic validation //
    if (payload.end_date && (payload.start_date > payload.end_date)) throw  new Error('Start date cannot come after the end date provided')
    if (payload.end_date && !payload.start_date) throw new Error('Start Date must be included if using End Date')

    // function to add days to a given date //
    function addDays(date, days) {
      let res = new Date(date);
      res.setDate(date.getDate() + days);
      return res;
    }

    // calculate seven days from the start date //
    let endLimit = addDays(dateUtils.formatStringToDate(payload.start_date), 7);
    
    // if there is no current end date, set the end date to the end limit (seven days from the start date) //
    if (!payload.end_date) {
      end = endLimit
    } else {
      end = new Date(payload.end_date);
    }

    // throw an error if the end date is later than the cutoff date //
    if (end > endLimit) { 
      throw new Error ('Start and End dates cannot be more than seven days apart')
    }

    // define url request parameters //
    let requestURLParameters = `api_key=${payload.key}`;
    if (payload.start_date) requestURLParameters = requestURLParameters.concat(`&start_date=${payload.start_date}`);
    if (payload.end_date) requestURLParameters = requestURLParameters.concat(`&end_date=${payload.end_date}`);
  
    // define request url //
    request = `https://api.nasa.gov/neo/rest/v1/feed?${requestURLParameters}`;
    console.log(request)
  }

  // neo request type is lookup //
  else if (payload.type == 'lookup') {

    // define validation schema //
    const validationSchema = Joi.object({
      asteroid_id: Joi.number().integer(),
      key: Joi.string().required(),
      type: Joi.string()
    });

    // validate the payload input //
    const { error, value } = validationSchema.validate(payload);
    if (error) throw error;

    let requestURLParameters = `api_key=${payload.key}`;
    request = `https://api.nasa.gov/neo/rest/v1/neo/${payload.asteroid_id}?${requestURLParameters}`;
  } 

  // neo request type is browse //
  else if (payload.type == 'browse') {
    let requestURLParameters = `api_key=${payload.key}`;
    request = `https://api.nasa.gov/neo/rest/v1/neo/browse/?${requestURLParameters}`;
  }

  // api request //
  return axios(request)
  .then((response) => {
    try {
      callback(response.data);
      return response.data;
    }
    catch (error) {
      callback(response.data);
      return response.data;
    }
  });
}

module.exports.asteroids = asteroids;