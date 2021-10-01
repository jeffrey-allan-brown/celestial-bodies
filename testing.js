const celestial = require('./index')

const payload = {
  asteroid_id: '2138893',
  key: 'DEMO_KEY',
  type: 'browse'
}

celestial.asteroids(payload, neows => {
  return neows;
})
