import timepointDepartures from './timepointDepartures';

describe('timepointDepartures', () => {
  it('getTimePointDepartures is not NULL', () => {
    const route = 'METRO Blue Line';
    const direction = 'southbound';
    const stop = 'Target Field Station Platform 2';
    return timepointDepartures.getTimepointDepartures(route, direction, stop).then(data => expect(data).toBeDefined());
  })

  it('calculateTimeDifference', () => {
    const route = 'METRO Blue Line';
    const direction = 'southbound';
    const stop = 'Target Field Station Platform 2';
    return timepointDepartures.calculateTimeDifference(route, direction, stop).then(data => expect(data).toBeDefined());
  })
})
