var socket = io("http://localhost:3000");
$(document).ready(function(){
 
  $("#nUsuarios").blur(function(){
    socket.emit("respuesta", { 
      n_estudiantes: $(this).val()||0,
      tiempo: $("#tiempo").val()||0
    });  
  })
  $("#tiempo").blur(function(){
    socket.emit("respuesta", { 
      n_estudiantes: $("#nUsuarios").val()||0,
      tiempo: $("#tiempo").val()||0
    });  
  })
  socket.on("calculo", function(data) {
    console.log("Paso por aqui 2");
    if ($("#salida").length > 0) {
      // $("#salida").text(JSON.stringify(data))
      $("#salida").empty();
      for (let i = 1; i <= data.n_estudiantes; i++) {
        $("#salida").append("<li>"+i+" : " + (i+1)+"</li>")
      }
    }
  });
})