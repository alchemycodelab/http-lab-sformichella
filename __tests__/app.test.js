const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('returns plaintext hi', async() => {
    const response = await request(app)
      .get('/');

    expect(response.body).toEqual('hi');
  });
});
