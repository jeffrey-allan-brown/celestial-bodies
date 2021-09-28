const celestial = require('./index.js');

const payload = {
  asteroid_id: 3471590,
  key: 'DEMO_KEY',
  type: 'browse'
};

celestial.asteroids(payload, asteroids => {
  console.log(asteroids);
});