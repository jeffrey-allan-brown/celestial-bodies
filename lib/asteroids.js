const axios = require('axios');
const Joi = require('joi');

// NeoWs (Near Earth Object Web Service) //
function asteroids(payload, callback) {

  // payload logic validation //
  if (payload.end_date && !payload.start_date) throw new Error('Start Date must be included if using End Date');

  let request;
  // neo request type is feed //
  if (payload.type == 'feed') {

    // function to add days to a given date //
    function addDays(date, days) {
      const res = new Date(Number(date));
      res.setDate(date.getDate() + days);
      return res;
    }


    // calculate seven days from the start date //
    let endLimit = addDays(new Date(payload.start_date), 7);

    // throw an error if the end date is later than the cutoff date //
    if (!(new Date(payload.end_date) < endLimit)) throw new Error ('Start and End dates cannot be more than seven days apart')

    // define validation schema //
    const validationSchema = Joi.object({
      end_date: Joi.date(),
      key: Joi.string().required(),
      start_date: Joi.date().less(Joi.ref('end_date')),
      type: Joi.string()
    });

    // validate the payload input //
    const { error, value } = validationSchema.validate(payload);
    if (error) throw error;

    // calculate seven days from start_date //

    let requestURLParameters = `api_key=${payload.key}`;
    if (payload.start_date) requestURLParameters = requestURLParameters.concat(`&start_date=${payload.start_date}`);
    if (payload.end_date) requestURLParameters = requestURLParameters.concat(`&end_date=${payload.end_date}`);
  
    request = `https://api.nasa.gov/neo/rest/v1/feed?${requestURLParameters}`;
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