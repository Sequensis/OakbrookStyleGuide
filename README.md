# Oakbrook Style Guide

[![Build status](https://ci.appveyor.com/api/projects/status/7m15cou93bl8g8uc/branch/master?svg=true)](https://ci.appveyor.com/project/Sequensis/oakbrookstyleguide/branch/master)

Oakbrook Style Guide is a front-end framework used by [Oakbrook Finance](http://oakbrookfinance.com), built upon [Bootstrap](http://getbootstrap.com),  and created/maintained by [Sequensis](http://sequensis.co.uk).

[http://oakbrookstyleguide.azurewebsites.net](http://oakbrookstyleguide.azurewebsites.net)

## Table of contents

* [Prerequisites](#prerequisites)
* [Getting started](#getting-started)
* [What's included](#whats-included)

## Prerequisites

* Install [Node.js](https://nodejs.org/en/download)
* Install Gulp (`npm install -g gulp`)
* Install Bower (`npm install -g bower`)

## Getting started

**Install npm packages**

`npm install`

All npm packages are installed to `./node_modules`.

**Install Bower packages**

`bower install`

All Bower packages are installed to `./bower_components`.

**Build**

`gulp build [--production]`

Build the distribution assets to `./dist`, and docs assets to `./docs`.

**Build and run**

`gulp` or `npm start`

Build the distribution assets to `./dist`, and docs assets to `./docs`, and run the docs website ([http://localhost:8304/](http://localhost:8304/)).

[Browser Sync](https://www.browsersync.io) ensures that any changes to the source are automatically reflected in the browser without a refresh.

## What's included

**Distribution assets**

```
dist/
├── css/
│   ├── likeyloans.css
│   ├── likeyloans.min.css
│   └── likeyloans.min.css.map 
├── fonts/
│   ├── FontAwesome.otf
│   ├── fontawesome-webfont.eot
│   ├── fontawesome-webfont.svg
│   ├── fontawesome-webfont.ttf
│   ├── fontawesome-webfont.woff
│   └── fontawesome-webfont.woff2
├── img/
│   ├── LikelyLoans.svg
│   ├── LikelyLoansFooter.svg
│   └── LikelyLoansNav.svg 
└── js/
    ├── oakbrookstyleguide.js
    ├── oakbrookstyleguide.min.js
    └── oakbrookstyleguide.min.js.map
```