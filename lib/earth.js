// import libraries //
const axios = require('axios')
const Joi = require('joi')

// import utilities //

// earth - landsat imagery //
function earth (payload, callback) {
  const type = payload.type

  // earth request type is imagery //
  if (type === 'imagery') {
   
    // define request url //
    request = `https://api.nasa.gov/planetary/earth/imagery?${requestURLParameters}`
  } else if (type === 'assets') {
    
    // define request url //
    request = `https://api.nasa.gov/planetary/earth/assets?${requestURLParameters}`
  } 

  // api request //
  return axios(request)
    .then((response) => {
      try {
        callback(response.data)
        return response.data
      } catch (error) {
        callback(response.data)
        return response.data
      }
    })
}

module.exports.earth = earth
