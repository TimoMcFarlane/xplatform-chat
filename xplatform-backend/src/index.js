const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', function(req, res){
  console.log('Someone connected');
});

io.on('connection', (socket) => {
  console.log(socket);
  socket.emit('news', { hello: 'world' });
  socket.on('disconnect', () => {
    console.log('disconnect');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});