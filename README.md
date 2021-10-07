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

  <p align="center">:rocket: &nbsp; &nbsp; Lightweight wrapper for NASA's API library.</p>





  ## Introduction
  Celestial Bodies is a lightweight wrapper for NASA's API library.




  ## Table of Contents

  :new_moon:  &nbsp; <a href="#system-requirements">System Requirements</a> &nbsp; | &nbsp;
  :waxing_crescent_moon:  &nbsp; <a href="#installation">Installation</a>  &nbsp; | &nbsp;
  :crescent_moon:  &nbsp; <a href="#usage">Usage</a>  &nbsp; | &nbsp;
  :moon:  &nbsp; <a href="#contributing">Contributing</a>  &nbsp; | &nbsp;
  :full_moon:  &nbsp; <a href="#credits">Credits</a>



  ## System Requirements

  At its core, Celestial Bodies relies on Node.js and NPM for its core functionality. 

  - Node ^14
  - NPM ^6


  ## Installation

  ```
  npm install celestial-bodies
  ```

  ## :artificial_satellite: &nbsp; Usage
  Require the package to access the preconfigured API functions.

  ```js
  const celestial = require('celestial-bodies');
  ```

  Each API function takes a `payload` object which includes the necessary data to process the request.

  The `key` value is required for all calls. You can leave it as `DEMO_KEY` and the functions will still work as intended, but the API call limitations will be stricter. Otherwise, request a free API code from NASA's website and use that as the key value (recommended).

  Currently, Celestial Bodies has built-in functionality for:<br>
  <a href="#apod">Astronomy Image of the Day</a><br>
  <a href="#asteroids">Near Earth Orbit Web Service</a><br>
  <a href="#donki">Space Weather Database of Notifications, Knowledge, and Information (DONKI)</a><br>
  <a href="#earth">Earth - Landsat Imagery</a><br>





  #### APOD
  The `apod()` function is used to leverage the Astronomy Picture of the Day API.

  The `date` parameter specifies the date for the returned image. Date will default to `today` if empty, and is expecting the value to be formatted as `YYYY-MM-DD`.

  You can also use `start_date` and `end_date` parameters to get a range of dates and their associated images. End date is `today` by default. 

  The `count` parameter is available for querying a number of random images. If you use `count` you cannot use any of the other three date parameters. 

  If the picture of the day is a video, you can use the `thumbs` parameter to specify whether you want it to return a video thumbnail or not. This parameter defaults to false.

  ```js

  // get results for 04/20/2021 //
  const payload = {
    key: 'DEMO_KEY',
    date: '2021-04-20',
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





  #### DONKI
  The `donki()` function provides access to the Space Weather Database of Notifications, Knowledge, and Information (DONKI). This API is particularly useful for space weather forecasters, scientists, and the general space science community.

  The API consists of a variety of components, each providing access to different data.

  ##### Coronal Mass Ejection (CME)

  Coronal Mass Ejections (CMEs) are large expulsions of plasma and magnetic field from the Sun's corona. This API provides data for specific CME events in a specified time period.

  The `start_date` and `end_date` parameters are optional, and if omitted from the payload the request will default to pulling the last 30 days worth of data.

  ```js
  const payload = {
    start_date: '2021-01-01', // optional //
    end_date: '2021-01-02', // optional //
    key: 'DEMO_KEY',
    type: 'cme'
  };

  celestial.donki(payload, cmeResponse => {
    return cmeResponse;
  });
  ```

  ##### Coronal Mass Ejection Analysis (CME+)

  ##### Geomagnetic Storm (GST)

  ##### Interplanetary Shock (IPS)

  ##### Solar Flare (FLR)

  ##### Solar Energetic Particle (SEP)

  ##### Magnetopause Crossing (MPC)

  ##### Radiation Belt Enhancement (RBE)

  ##### High Speed Stream (HSS)

  ##### WSA+EnlilSimulation (WSA)

  ##### Notifications



  #### Earth

  The `earth()` function is designed to give you an easy to use taste of what Landsat imagery data can provide. There are two different types for this API - `imagery` and `assets` - which serve slightly different purposes.

  ##### Imagery

  This endpoint retrieves the Landsat 8 image for the supplied location and date. 

  ##### Assets

  This endpoint retrieves the date-times and asset names for closest available imagery for a supplied location and date.

  ## Contributing

  Contributions are welcome - feel free to submit a pull request and it will be reviewed promptly. 

  ## Credits

  ##### Core Packages
  <a href="https://github.com/axios/axios">Axios</a>

  ##### Misc. Assets
  <a href="https://looka.com/">Looka</a>
