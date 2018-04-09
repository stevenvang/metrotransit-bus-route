import timepointDepartures from './src/api/timepointDepartures';
import routes from './src/api/routes';
let route = '';
let direction = '';
let stop = '';
if (process.argv.length !== 5) {
  throw new Error('You need to specify Route, Direction, and Stop.');
} else {
  process.argv[2] ? route = process.argv[2] : route = '';
  process.argv[4] ? direction = process.argv[4] : direction = '';
  process.argv[3] ? stop = process.argv[3] : stop = '';
}

timepointDepartures.calculateTimeDifference(route, direction, stop);
