# metrotransit-bus-route

## Context

By using the Twin Cities Metro Transit API (https://svc.metrotransit.org/), this application will determine the time until the next bus route arrives. To determine the time for the next bus arrival, three arguments is needed:
- Bus Route - substring of the bus route name which is only in one bus route.
- Bus Stop Name - substring of the bus stop name which is only in one bus stop on that route.
- Direction - direction as to which the bus is traveling: North, South, East, West

## Installation

This is a nodejs application.  The following pre-conditions is required:
- git
- nodejs

## Initial Setup

1) Clone this project.
1) Install all dependencies: `npm install`.

## Running the program
Run the following NPM script with the given params: \n
`npm run route:inline "INSERT BUS ROUTE" "INSERT BUS STOP NAME" "INSERT DIRECTION"` \n
example: npm run route:inline "METRO Blue Line" "Target Field Station Platform 1" "southbound"

## Unit Testing
Unit testing is developed using the Jest framework.  Under the ./src/api/ folder, each .spec file represents unit tests. \n
To run unit tests, run `npm test`
