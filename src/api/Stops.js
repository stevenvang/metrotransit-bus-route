import request from 'request-promise';
import routes from './routes';
import directions from './directions';

  async function getStops (route, direction, stop) {
    const routeURI = await routes.getRoutes(route);
    const directionURI = await directions.getDirection(route, direction);
    const URL = `https://svc.metrotransit.org/NexTrip/Stops/${routeURI.Route}/${directionURI.Value}?format=json`;

    const res = await request(URL).catch(e => console.log(e));
    const body = JSON.parse(res);

    return body
    .filter(type => type.Text.toLowerCase() === stop.toLowerCase())[0];
  }

  export default {
    getStops
  }
