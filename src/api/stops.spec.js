import getStops from './stops';

describe('getStops', () => {
  it('returns Stop value', () => {
    const route = 'METRO Blue Line';
    const direction = 'southbound';
    const stop = 'Target Field Station Platform 2';
    return getStops.getStops(route, direction, stop).then(data => expect(data.Value).toBe('TF22'));
  })
})
