const request = require('supertest');
const app = require('../lib/app');

describe('app routes', () => {
  it('returns plaintext hi', async() => {
    const response = await request(app)
      .get('/');

    expect(response.text).toEqual('hi');
    expect(response.type).toEqual('text/plain');
  });

  it('returns red inside an h1 element', async() => {
    const response = await request(app)
      .get('/red');

    expect(response.text).toEqual('<h1>red</h1>');
  });
});
