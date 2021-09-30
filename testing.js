const celestial = require('./index');

// get 10 random results //
const payload = {
  key: 'DEMO_KEY',
  count: 10,
};

celestial.apod(payload, asteroids => {
  console.log(asteroids);
});