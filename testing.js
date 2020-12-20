const celestial = require('./lib/celestial');

const payload = {
  global: {
    key: 'DEMO_KEY', // required - can include personal API key or leave as DEMO_KEY and it will still work, but it at least needs to contain a value.
  },
  apod: {
    date: '', // optional - will default to today if no value provided. Format needs to be YYYY-MM-DD.
    hd: '' // optional - defaults to false. Change to `true` to have the API return a high-resolution endpoint.
  },
  asteroids: {
  	requestType: 'feed', // specify whether the call is for the data feed or object lookup. Expecting `feed`, `lookup`, or 'browse'
  	feed: {
  		start_date: '2020-01-02', // optional - will default to today if no value provided. Format needs to be YYYY-MM-DD. 
    	end_date: '' // optional - will default to seven days after today if no value provided. Format needs to be YYYY-MM-DD.
  	},
  	lookup: {
  		id: '2465633' // required if passing `lookup` in requestType value.
  	}
  },
};


/*
celestial.apod(payload, response => {
  console.log(response);
});
*/



celestial.asteroids(payload, response => {
  console.log(response);
});
