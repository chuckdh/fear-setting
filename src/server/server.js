const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');

let stateObject = {
  fears: {},
  benefits: '',
  cost: ''
}

let connectedClients = 0;
const saveFile = "./save.json";

saveCurrentState = function() {
  fs.writeFile(saveFile, JSON.stringify(stateObject), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("State saved");
  }); 
}

loadLastSavedState = function() {
  console.log("Loading last save...");
  if (fs.existsSync(saveFile)) {
    console.log("Save found....");
    const lastSavedState = fs.readFileSync(saveFile, 'utf8');
    if(lastSavedState) {
      stateObject = JSON.parse(lastSavedState);
      console.log("Loaded");
    }
  }
}
loadLastSavedState();

io.on('connection', function(socket){
  connectedClients++;
  console.log('a user connected ('+connectedClients+')');
  socket.emit('init', stateObject);
  io.emit('connectedClients', connectedClients);

  socket.on('disconnect', function(){
    connectedClients--;
    io.emit('connectedClients', connectedClients);
    console.log('user disconnected ('+connectedClients+')');
  });

  socket.on('set fears', function(fears){
    stateObject.fears = fears;
    saveCurrentState();
    socket.broadcast.emit('set fears', stateObject.fears);
  });
  socket.on('set benefits', function(benefits){
    stateObject.benefits = benefits;
    saveCurrentState();
    socket.broadcast.emit('set benefits', stateObject.benefits);
  });
  socket.on('set cost', function(cost){
    stateObject.cost = cost;
    saveCurrentState();
    socket.broadcast.emit('set cost', stateObject.cost);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});