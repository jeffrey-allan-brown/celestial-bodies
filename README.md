  <p align="center">
    <img src="./.github/assets/celestial-bodies.png" alt="Celestial Bodies">
  </p>

  <p align="center">
    <a href="#">
      <img src="https://img.shields.io/static/v1?label=status&message=Active%20Development&color=blue&style=flat-square&?logo=open-source-initiative&logoColor=ffffff">
    </a>
    <a href="#">
      <img src="https://img.shields.io/github/v/release/hieronymous-bean/celestial-bodies?include_prereleases&style=flat-square">
    </a>
    <a href="#">
      <img src="https://img.shields.io/github/issues-raw/hieronymous-bean/celestial-bodies?style=flat-square">
    </a>
    <a href="#">
      <img src="https://img.shields.io/github/license/hieronymous-bean/exemplar?style=flat-square">
    </a>
    <a href="#">
      <img src="https://img.shields.io/badge/gulp-builds_this_project-eb4a4b.svg?logo=data%3Aimage%2Fpng%3Bbase64%2CiVBORw0KGgoAAAANSUhEUgAAAAYAAAAOCAMAAAA7QZ0XAAAABlBMVEUAAAD%2F%2F%2F%2Bl2Z%2FdAAAAAXRSTlMAQObYZgAAABdJREFUeAFjAAFGRjSSEQzwUgwQkjAFAAtaAD0Ls2nMAAAAAElFTkSuQmCC&style=flat-square">
    </a>
    <br>
  </p>

  <p align="center">:rocket: Lightweight wrapper for NASA's API library.</p>





  ## Introduction
  Celestial Bodies is a lightweight wrapper for NASA's API library.




  ## Table of Contents

  :new_moon: <a href="#system-requirements">System Requirements</a>
  :waxing_crescent_moon: <a href="#installation">Installation</a>
  :crescent_moon: <a href="#usage">Usage</a>
  :moon: <a href="#contributing">Contributing</a>
  :full_moon: <a href="#credits">Credits</a>



  ## System Requirements

  At its core, Celestial Bodies relies on Node.js and NPM for its core functionality. 

  - Node ^14
  - NPM ^6


  ## Installation

  ```
  npm install celestial-bodies
  ```

  ## :artificial_satellite: Usage
  Require the package to access the preconfigured API functions.
  ```
  const celestial = require('celestial-bodies');
  ```

  Each API function takes a `payload` object which includes the necessary data to process the request. 

  The `key` value is required for all calls. You can leave it as `DEMO_KEY` and the functions will still work as intended, but the API call limitations will be stricter. Otherwise, request a free API code from NASA's website and use that as the key value (recommended).

  #### APOD
  The `apod()` function is used to leverage the Astronomy Picture of the Day API.

  The `Date` parameter specifies the date for the returned image. Date will default to `today` if empty, and is expecting the YYYY-MM-DD format.

  You can also use `start_date` and `end_date` parameters to get a range of dates and their associated images. End date is `today` by default. 

  The `count` parameter is available for querying a number of random images. If you use `count` you cannot use any of the other three date parameters. 

  If the picture of the day is a video, you can use the `thumbs` parameter to specify whether you want it to return a video thumbnail or not. Defaults to false. 


  ```js
  const payload = {
    key: 'DEMO_KEY',
    date: '',
    hd: ''
  };

  celestial.apod(payload, pictureOfTheDay => {
    return pictureOfTheDay;
  });
  ```




  #### Asteroids
  The `asteroids()` function provides access to NASA's Near Earth Object Web Service. This call has three separate modes - ``feed``, ``lookup``, and ``browse``. 

  ##### Feed
  For this mode, provide your `key` in the request along with the `start_date` and `end_date` for the range of dates you would like results for. This range can be no more than seven days.

  ```js
  const payload = {
    end_date: '2021-01-01',
    key: 'DEMO_KEY',
    start_date: '2021-01-02',
    type: 'feed'
  };

  celestial.apod(payload, asteroid => {
    return asteroid;
  });
  ```

  ##### Lookup
  In addition to your `key`, you need to provide the request with the `asteroid_id`, which is the id of the asteroid you're looking up. 

  ```js
  const payload = {
    asteroid_id: 3471590,
    key: 'DEMO_KEY',
    type: 'lookup'
  };

  celestial.apod(payload, asteroid => {
    return asteroid;
  });
  ```

  ##### Browse
  This mode doesn't require any parameters aside from the api key. 

  These mode values are passed in through `type` payload parameter. 

  ```js
  const payload = {
    key: 'DEMO_KEY',
    type: 'browse'
  };

  celestial.apod(payload, asteroid => {
    return asteroid;
  });
  ```


  ## Contributing

  Contributions are welcome - feel free to submit a pull request and it will be reviewed promptly. 

  ## Credits

  ##### Core Packages
  <a href="https://github.com/axios/axios">Axios</a>

  ##### Misc. Assets
  <a href="https://looka.com/">Looka</a>

  ## Bonus

  Please :star: the project if you enjoy it - much appreciated!