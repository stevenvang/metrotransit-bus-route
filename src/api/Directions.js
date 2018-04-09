import request from 'request-promise';
import routes from './routes';

  async function getDirection (route, direction) {
    const routeURI = await routes.getRoutes(route);
    const URL = `https://svc.metrotransit.org/NexTrip/Directions/${routeURI.Route}?format=json`;

    const res = await request(URL).catch(e => console.log(e));
    const body = JSON.parse(res);

    return body.filter(type => type.Text.toLowerCase() === direction.toLowerCase())[0];
  }

  export default {
    getDirection
  }
