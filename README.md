# metrotransit-bus-route

## Context

By using the Twin Cities Metro Transit API (https://svc.metrotransit.org/), this application will determine the time until the next bus route arrives. To determine the time for the next bus arrival, three arguments is needed:
- Bus Route - substring of the bus route name which is only in one bus route.
- Bus Stop Name - substring of the bus stop name which is only in one bus stop on that route.
- Direction - direction as to which the bus is traveling: North, South, East, West

## Installation

This is a nodejs application.  The following pre-conditions is required:
- git
- nodejs (nodejs comes prepackaged with NPM so no need to install it independently)

## Initial Setup

1) Fork and clone this project.
1) Install all dependencies: `npm install`.

## Running the program

There are two ways to interact with this program:

### Inline scripting with arguments
Run the following NPM script with the given params:
`npm run route:inline "INSERT BUS ROUTE" "INSERT BUS STOP NAME" "DIRECTION"`
example: npm run route:inline "METRO Blue Line" "Target Field Station Platform 1" "south"

### Webpage
Spinning up the server:
1) Run `npm start`
1) Open your preferred browser and navigate to localhost:8080
1) In the given form, in each dropdown, select a Bus Route, a Bus Stop, and Direction
1) Submit the form.  The webpage will render the arrival time.  (if applicable)

## Testing
### Unit Testing
Unit testing is developed using the Jest framework.  Under the ./src/api/ folder, each .spec file represents unit tests for each function.
To run unit tests, run `npm test`

### End-To-End Testing
Functional testing is developed using the WebdriverIO framework.
To run e2e, run `npm run test:e2e`
