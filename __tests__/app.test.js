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
    expect(response.type).toEqual('text/html');
  });

  it('returns green inside an h1 element', async() => {
    const response = await request(app)
      .get('/green');

    expect(response.text).toEqual('<h1>green</h1>');
    expect(response.type).toEqual('text/html');
  });

  it('returns blue inside an h1 element', async() => {
    const response = await request(app)
      .get('/blue');

    expect(response.text).toEqual('<h1>blue</h1>');
    expect(response.type).toEqual('text/html');
  });

  it('returns status code 200 and some plain text', async() => {
    const data = 'some plain text';

    const response = await request(app)
      .post('/echo')
      .send('some plain text');

    expect(response.status).toEqual(200);
    expect(response.type).toEqual('text/plain');
    expect(response.text).toEqual(data);
  });
});
