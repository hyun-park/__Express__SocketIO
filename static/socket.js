
  var socket = io.connect();
  $("#msgbox").keyup(function(event) {
      if (event.which == 13) {
          socket.emit('fromclient',{msg:$('#msgbox').val()});
          $('#msgbox').val('');
      }
  });
  socket.on('toclient',function(data){
      console.log(data.msg);
      $('#msgs').append(data.msg+'<BR>');
  });
  socket.on('greeting',function(data){
      console.log(data.msg);
  });
