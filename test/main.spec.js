const supertest = require('supertest');
const app = require('../main');

const server = supertest(app);

test('string with a single number should result in the number itself', () => {
  expect(1).toBe(1);
});

describe('Testing API', () => {
  it('Test root endpoint', async() => {
    const response = await server.get('/test')
    expect(response.body).toEqual({'hello':'world'});
  });
});


