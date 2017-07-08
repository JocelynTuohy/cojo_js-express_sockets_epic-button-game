const express = require('express');
const path = require('path');
const app = express();
const PORT  = 8000;

var number = 0;

app.use(express.static(path.join(__dirname, './client')));
app.use(express.static(path.join(__dirname, './node_modules/jquery/dist')));

const server = app.listen(PORT, () => {
  console.log('listening on port 8000');
});

const io = require('socket.io').listen(server);

io.on("connection", (socket) => {
  console.log("New connection", socket.id);
  socket.emit("update", number);

  socket.on("click", () => {
    ++number;
    io.emit("update", number);
  })

  socket.on("reset", () => {
    number = 0;
    io.emit("update", number);
  })
})