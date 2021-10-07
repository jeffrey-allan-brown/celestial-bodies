// import libraries //
const axios = require('axios')
const Joi = require('joi')

// import utilities //

// neows (near earth object web service) //
function donki (payload, callback) {
  let request, start, end, key
  const type = payload.type

  // donki request type is coronal mass ejection (cme) //
  if (type === 'cme') {
    // define validation schema //
    const validationSchema = Joi.object({
      end_date: Joi.string().regex(/\d{4}-\d{2}-\d{2}/, { name: 'endDate' }).optional(),
      key: Joi.string().required(),
      start_date: Joi.string().regex(/\d{4}-\d{2}-\d{2}/, { name: 'startDate' }).optional(),
      type: Joi.string().regex(/\w{3,6}/, { name: 'requestType' }).required()
    })

    key = payload.key
    end = payload.end_date
    start = payload.start_date

    // validate the payload input //
    const { error } = validationSchema.validate(payload)
    if (error) throw error

    // payload logic validation //
    if (payload.end_date && (payload.start_date > payload.end_date)) throw new Error('Start date cannot come after the end date provided')
    if (payload.end_date && !payload.start_date) throw new Error('Start Date must be included if using End Date')

    // define url request parameters //
    let requestURLParameters = `api_key=${key}`
    if (start) requestURLParameters = requestURLParameters.concat(`&start_date=${payload.start_date}`)
    if (end) requestURLParameters = requestURLParameters.concat(`&end_date=${payload.end_date}`)

    // define request url //
    request = `https://api.nasa.gov/DONKI/CME?${requestURLParameters}`
  } else if (type === 'cme+') {
    return 'CME+ Coming Soon'
  } else if (type === 'gst') {
    return 'GST Coming Soon'
  } else if (type === 'ips') {
    return 'IPS Coming Soon'
  } else if (type === 'flr') {
    return 'FLR Coming Soon'
  } else if (type === 'sep') {
    return 'SEP Coming Soon'
  } else if (type === 'mpc') {
    return 'MPC Coming Soon'
  } else if (type === 'rbe') {
    return 'RBE Coming Soon'
  } else if (type === 'hss') {
    return 'HSS Coming Soon'
  } else if (type === 'wsa') {
    return 'WSA Coming Soon'
  } else if (type === 'notifications') {
    return 'Notifications Coming Soon'
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

module.exports.donki = donki
