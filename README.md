
# Material Control Generator
[![Build Status](https://travis-ci.com/greatpersonnot27/material-control-generator.svg?branch=main)](https://travis-ci.com/greatpersonnot27/material-control-generator)
## Table of contents
* [General info](#general-info)
* [JSON file structure](#json-file-structure)
* [Technologies](#technologies)
* [Development server](#development-server)
* [Running unit tests](#running-unit-tests)
* [Running end-to-end tests](#running-end-to-end-tests)


## General info

This application has one purpose. To take the JSON string as an input and generate material control components according to the specification of said JSON string.  

## JSON file structure
The file contains a 'controls' array, which is the root of the object. Controls array contains the list of control components that need to be rendered. 
```{
 "controls": [
 {
 "type": "Button",
 "x": 10,
 "y": 20,
 "width": 80,
 "height": 40,
 "text": "Button"
 }}
 ```
 Definition of the controls component should contain the type, x, y coordinates. The type can be one of these 3: Button, Slider, Label. x, y coordinates are absolutie coordinates of the components. Other parameters inside the object are specific to the type of the component. (Width, Height, text, max value etc)

## Output
The output will be generated on a new page using Angular material components. [Angular Material](https://material.angular.io/)

## Technologies
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.13. 



## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

