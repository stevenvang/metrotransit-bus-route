import getDirection from './directions';

describe('getDirections', () => {
  it('returns direction value', () => {
    const route = 'METRO Blue Line';
    const direction = 'southbound';
    return getDirection.getDirection(route, direction).then(data => expect(data.Value).toBe('1'));
  })
})
