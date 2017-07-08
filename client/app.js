$(document).ready(() => {

  console.log('The document is ready!');

  const socket = io.connect();

  $('#epic').click(() => {
    socket.emit('click');
  });

  $('#reset').click(() => {
    socket.emit('reset');
  });

  socket.on('update', (number) => {
    $('#number').html(number);
  });

});