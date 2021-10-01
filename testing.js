const celestial = require('./index');

// get results for 04/20/2021 //
const payload = {
  end_date: '2021-04-27',
  key: 'DEMO_KEY',
  start_date: '2021-04-20',
  type: 'feed'
};

celestial.asteroids(payload, neows => {
  console.log(neows)
  return neows;
});
