const Ws = require('ws');

;((Ws) => {
  // ws:localhost:8000
  const server = new Ws.Server({ port: 8000 });
  
  const init = () => {
    bindEvent();
  }

  function bindEvent () {
    server.on('open', handleOpen);
    server.on('close', handleClose);
    server.on('error', handleError);
    server.on('connection', handleConnection);
  }

  function handleOpen () {
    console.log('Websocket open');
  }

  function handleClose () {
    console.log('Websocket close'); 
  }

  function handleError () {
    console.log('Websocket error');
  }

  function handleConnection (ws) {
    console.log('Websocket connected');
    
    ws.on('message', handleMessage);
  }

  function handleMessage (msg) {
    server.clients.forEach(function (c) {
      c.send(msg);
    })
  }

  init();

})(Ws);