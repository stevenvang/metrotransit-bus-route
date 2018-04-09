import request from 'request-promise';
import routes from './routes';
import directions from './directions';
import stops from './stops';

  async function getTimepointDepartures (route, direction, stop) {
    const routeURI = await routes.getRoutes(route);
    const directionURI = await directions.getDirection(route, direction);
    const stopURI = await stops.getStops(route, direction, stop);
    const URL = `http://svc.metrotransit.org/NexTrip/${routeURI.Route}/${directionURI.Value}/${stopURI.Value}?format=json`;

    const res = await request(URL).catch(e => console.log(e));
    const timepoints = JSON.parse(res);

    return timepoints;
  }

async function calculateTimeDifference (route, direction, stop) {
  let departureTime = await this.getTimepointDepartures(route, direction, stop);
  let nextDepart = Date(departureTime[0].DepartureTime.slice(6, departureTime[0].DepartureTime.indexOf('-')));
  let timeDifference = Math.abs(Date.now() - departureTime[0].DepartureTime.slice(6, departureTime[0].DepartureTime.indexOf('-')));
  let minutes = Math.floor((timeDifference/1000)/60);

  console.log('Next Departure is in', minutes, 'minutes.');
  return minutes;
}

export default {
  getTimepointDepartures,
  calculateTimeDifference
}
