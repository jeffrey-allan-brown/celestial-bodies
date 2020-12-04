<p align="center">
  <img src="./.github/assets/celestial-bodies.png" alt="Celestial Bodies">
</p>

<p align="center">
  <a href="#">
    <img src="https://img.shields.io/static/v1?label=status&message=Active&nbsp;Development&color=blue&style=flat-square&?logo=open-source-initiative&logoColor=ffffff">
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

<a href="#system-requirements" style="font-weight: bold !imporant; color: #171A5B !imporant;">System Requirements</a>

- [Installation](#installation)
- [Usage](#usage)
- [Roles & Permissions](#roles--permissions)
- [Features](#features)
- [Updates](#updates)
- [Contributing](#contributing)
- [License](#license)
- [Credits](#credits)

## System Requirements


At its core, Celestial Bodies relies on Node.js and NPM for its core functionality. 

- Node.js ~14.15.1
- NPM ~6.14.8

## Installation

```
npm install celestial-bodies
```

## Usage
Require the package to access the preconfigured API functions.
```
const celestial = require('celestial-bodies');
```

##### APOD
The APOD function is used to leverage the Astronomy Picture of the Day API. 
The payload object is configurable, but only the API Key parameter is required. You can include personal API key or leave as DEMO_KEY and it will still work.
If not specified, date defaults to *today* and hd defaults to false. 

```js
const payload = {
  key: 'DEMO_KEY',
  date: '',
  hd: ''
};

celestial.apod(payload, response => {
  console.log(response);
});
```


## Features

In development

## Updates

In development

## Contributing

In development

## Credits

In development

<a href="https://www.buymeacoffee.com/hieronymousbean" target="_blank">
    <img src="https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png" alt="Buy Me A Coffee" style="height: 41px !important;width: 174px !important;box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;-webkit-box-shadow: 0px 3px 2px 0px rgba(190, 190, 190, 0.5) !important;" >
</a>

Please :star: the project if you enjoy it - much appreciated!