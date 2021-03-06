const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const fs = require('fs');
const path = require('path');
const _ = require('lodash');

const distDirectory = path.join(__dirname, '../../dist');
const port = process.env.PORT || 3000;

let stateObject = {
  fears: {},
  benefits: '',
  cost: ''
}

let connectedClients = 0;
const saveFile = "./save.json";

const saveCurrentState = function() {
  fs.writeFile(saveFile, JSON.stringify(stateObject), function(err) {
      if(err) {
          return console.log(err);
      }

      console.log("["+(new Date().toISOString())+"] State saved");
  }); 
}
const throttledSaveCurrentState = _.throttle(saveCurrentState, 1000);

const loadLastSavedState = function() {
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
    throttledSaveCurrentState();
    socket.broadcast.emit('set fears', stateObject.fears);
  });
  socket.on('set benefits', function(benefits){
    stateObject.benefits = benefits;
    throttledSaveCurrentState();
    socket.broadcast.emit('set benefits', stateObject.benefits);
  });
  socket.on('set cost', function(cost){
    stateObject.cost = cost;
    throttledSaveCurrentState();
    socket.broadcast.emit('set cost', stateObject.cost);
  });
});

app.use(express.static(distDirectory))

app.get('/*', function(req, res){
  res.sendFile('./index.html', { 
    root: distDirectory
  });
});

http.listen(port, function(){
  console.log('listening on *:'+port);
});