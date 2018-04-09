import getRoutes from './routes';

describe('getRoutes', () => {
  it('returns METRO Blue Line Route Value', () => {
    const route = 'METRO Blue Line';
    return getRoutes.getRoutes(route).then(data => expect(data.Route).toBe('901'));
  })
})
