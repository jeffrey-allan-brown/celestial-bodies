// import libraries //
const axios = require('axios')
const Joi = require('joi')

// define validation schema for payload processing //
const validationSchema = Joi.object({
  count: Joi.number().integer(),
  date: Joi.string().regex(/\d{4}-\d{2}-\d{2}/, { name: 'date' }).optional(),
  end_date: Joi.string().regex(/\d{4}-\d{2}-\d{2}/, { name: 'endDate' }).optional(),
  key: Joi.string().required(),
  start_date: Joi.string().regex(/\d{4}-\d{2}-\d{2}/, { name: 'startDate' }).optional(),
  thumbs: Joi.boolean()
})

// Astronomy Picture of the Day //
const apod = function (payload, callback) {
  // validate the payload input //
  const { error } = validationSchema.validate(payload)
  if (error) throw error

  if (payload.date && (payload.start_date || payload.end_date)) throw new Error('If using Date, you cannot also use Start Date or End Date')
  if (payload.end_date && !payload.start_date) throw new Error('Start Date must be included if using End Date')
  if (payload.count && (payload.start_date || payload.end_date)) throw new Error('If using count, you cannot use Start Date or End Date')

  // define API variables //
  let requestURLParameters = `api_key=${payload.key}`
  if (payload.date) requestURLParameters = requestURLParameters.concat(`&date=${payload.date}`)
  if (payload.start_date) requestURLParameters = requestURLParameters.concat(`&start_date=${payload.start_date}`)
  if (payload.end_date) requestURLParameters = requestURLParameters.concat(`&end_date=${payload.end_date}`)
  if (payload.count) requestURLParameters = requestURLParameters.concat(`&count=${payload.count}`)
  if (payload.thumbs) requestURLParameters = requestURLParameters.concat(`&thumbs=${payload.thumbs}`)

  // request url //
  const request = `https://api.nasa.gov/planetary/apod?${requestURLParameters}`

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

// export module //
module.exports.apod = apod
