const express = require('express');
const SocketServer = require('ws').Server;
const ws = require('ws');
const PORT = 3001;
const uuidv1 = require('uuid/v1');

const server = express()
   // Make the express server serve static assets (html, javascript, css) from the /public folder
  .use(express.static('public'))
  .listen(PORT, '0.0.0.0', 'localhost', () => console.log(`Listening on ${ PORT }`));

// Create the WebSockets server
const wss = new SocketServer({ server });

let connect = 0;

wss.broadcast = function broadcast(data) {
    wss.clients.forEach(function each(client) {
        if (client.readyState === ws.OPEN) {
            client.send(data);
        }
    })
}


// Set up a callback that will run when a client connects to the server
// When a client connects they are assigned a socket, represented by the ws parameter in the callback.
wss.on('connection', (ws) => {
  console.log('Client connected');
  connect += 1;
  wss.broadcast(connect);

  ws.on('message', function incoming(data) {
    const parsed = JSON.parse(data);
    switch(parsed.type) {
      case 'postMessage':
        const message = {
          type: 'incomingMessage',
          id: uuidv1(),
          username: parsed.username,
          content: parsed.content
        };
        wss.broadcast(JSON.stringify(message));
        break;
      case 'postNotification':
        const notification = {
          type: 'incomingNotification',
          id: uuidv1(),
          content: parsed.content
        };
        wss.broadcast(JSON.stringify(notification));
        break;
    }

  })
  // Set up a callback for when a client closes the socket. This usually means they closed their browser.
  ws.on('close', () => {
    console.log('Client disconnected')
    connect -= 1;
    wss.broadcast(connect);
  });

});