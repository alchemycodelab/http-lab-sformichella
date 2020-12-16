const net = require('net');
const parseRequest = require('./utils/parseRequest');
const createResponse = require('./utils/createResponse');

const app = net.createServer(socket => {
  socket.on('data', data => {
    const request = parseRequest(data.toString());

    const getRoutes = {
      '/': {
        body: 'hi',
        type: 'text/plain'
      },
      '/red': {
        body: '<h1>red</h1>',
        type: 'text/html'
      },
      '/green': {
        body: '<h1>green</h1>',
        type: 'text/html'
      },
      '/blue': {
        body: '<h1>blue</h1>',
        type: 'text/html'
      }
    };

    if(request.method === 'GET') {
      const { path } = request;
      const { body, type: contentType } = getRoutes[path];

      socket.end(createResponse({ body, contentType }));
    } else if(request.method === 'POST') {
      const { body } = request;
      const contentType = 'text/plain';

      socket.end(createResponse({ body, contentType }));
    } else {
      socket.end(createResponse({ body: 'Not Found', status: '404 Not Found', contentType: 'text/plain' }));
    }
  });
});

module.exports = app;
