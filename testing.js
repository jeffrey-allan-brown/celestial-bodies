const celestial = require('./index.js');

const payload = {
  key: 'DEMO_KEY',
  startDate: '2021-08-31',
  endDate: '2021-09-01'
};


celestial.apod(payload, response => {
  console.log(response);
});