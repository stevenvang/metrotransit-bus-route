import request from 'request-promise';

  async function getRoutes (route) {
    const URL = 'https://svc.metrotransit.org/NexTrip/Routes?format=json';

    const res = await request(URL).catch(e => console.log(e));
    const body = JSON.parse(res);
    return body.filter(type => type.Description.toLowerCase() === route.toLowerCase())[0];
  }

  export default {
    getRoutes
  }
