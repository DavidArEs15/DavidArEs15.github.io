function volverAreproducir() { 

  var clip = document.getElementById('video');
  clip.currentTime = 0;
}

function elegirPelicula(){ 
  
  var clip=$("#video").attr("src","videos/los reptiles.mp4")
}

$(document).ready(function() { 

var contestado = false;
var contestado2 = false;
var contestado3 = false;
var contestado4 = false;

function checkQuiz() {
 
  var clip = document.getElementById('video');

  $(".textoverlay4").css("display", "block")
  $('.menuVideo').removeAttr('disabled')

  //INFORMACIÓN 1
  if(clip.currentTime >= 8 && clip.currentTime < 12){

    $(".textoverlay4").html("Las tortugas de tierra pueden llegar a vivir más de 150 años.");
  
  }else{

    $(".textoverlay4").html("");

  }

  if(clip.currentTime >= 9 && clip.currentTime < 13){

    $(".linkTortugas").css("display","block");
    $(".linkTortugas").html("Pulsa aquí para aprender mucho más sobre las tortugas y sus características."); 

  }else{

    $(".linkTortugas").css("display","none");
    $(".linkTortugas").html("");

  }

  //PREGUNTA 1
  if(clip.currentTime >= 19 && clip.currentTime < 24){

    if(!contestado){

      clip.pause();
      $(".textoverlay").css("display", "block")
      $(".textoverlay").html("¿Cuál de los siguientes animales no es un reptil?");
      $(".opcionQuiz").css("display","block");
      $('.menuVideo').attr('disabled', 'disabled')
      
    }
    
    $("#answer3").on('click', function(event){ 

      event.stopPropagation();
      event.stopImmediatePropagation();

      $(".opcionQuiz").css("display","none");
      $(".textoverlay").html("¡¡Enhorabuena, has acertado!!");
      $('.menuVideo').removeAttr('disabled')

      clip.play();
      contestado=true;

  });
  
  $("#answer1,#answer2,#answer4").on('click', function(event){ 

    event.stopPropagation();
    event.stopImmediatePropagation();

    $(".opcionQuiz").css("display","none");
    $(".textoverlay").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Rana.");
    $('.menuVideo').removeAttr('disabled')

    clip.play();
    contestado=true;

  });

  }else{

    $(".textoverlay").html("");
    $(".textoverlay").css("display", "none")

    contestado=false;

  }

  //PREGUNTA 2
  if(clip.currentTime >= 36 && clip.currentTime < 40){

    if(!contestado2){

      clip.pause();
      $(".textoverlay5").css("display", "block")
      $(".textoverlay5").html("¿Cuál de los siguientes animales no es vertebrado?");
      $(".opcionQuiz2").css("display","block");
      $('.menuVideo').attr('disabled', 'disabled')

    }
    
    $("#answer6").on('click', function(event){ 

      event.stopPropagation();
      event.stopImmediatePropagation();

      $(".opcionQuiz2").css("display","none");
      $(".textoverlay5").html("¡¡Enhorabuena, has acertado!!");
      $('.menuVideo').removeAttr('disabled')

      clip.play();
      contestado2=true;

  });
  
  $("#answer5,#answer7,#answer8").on('click', function(event){ 

      event.stopPropagation();
      event.stopImmediatePropagation();

      $(".opcionQuiz2").css("display","none");
      $(".textoverlay5").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Pulpo.");
      $('.menuVideo').removeAttr('disabled')

      clip.play();
      contestado2=true;

  });

  }else{

    $(".textoverlay5").html("");
    $(".textoverlay5").css("display", "none")

    contestado2=false;

  }

  //PREGUNTA 3
  if(clip.currentTime >= 58 && clip.currentTime < 62){

    if(!contestado3){

      clip.pause();
      $(".textoverlay6").css("display", "block")
      $(".textoverlay6").html("¿Cuánto tiempo aguanta una tortuga marina bajo el agua?");
      $(".sendAnswer").css("display","block");

    }

    $("#answer9").on('click', function(event){

      event.stopPropagation(); 
      event.stopImmediatePropagation();  

      $(".sendAnswer").css("display","none");

      if($("#answerEscrita").val().toLowerCase() == "entre 4 y 7 horas"){ 

      $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");

      }else if($("#answerEscrita").val().toLowerCase() == "4 horas"){

      $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");
      $("#answerEscrita").val("");

      }else if($("#answerEscrita").val().toLowerCase() == "5 horas"){

        $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");
        $("#answerEscrita").val("");
  
      }else if($("#answerEscrita").val().toLowerCase() == "6 horas"){

        $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");
        $("#answerEscrita").val("");
  
      }else if($("#answerEscrita").val().toLowerCase() == "7 horas"){

        $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");
        $("#answerEscrita").val("");
      }

      else{

      $(".textoverlay6").html("Lo sentimos, no has introducido la respuesta correcta. SOLUCIÓN: Entre 4 y 7 horas.");
      $("#answerEscrita").val("");

      }

      clip.play();
      contestado3=true;

  });

  }else{

    $(".textoverlay6").html("");
    $(".textoverlay6").css("display", "none")
    contestado3=false;

  }

  //PREGUNTA 4
  if(clip.currentTime >= 69 && clip.currentTime < 74){

    if(!contestado4){

      clip.pause();
      $(".textoverlay7").css("display", "block")
      $(".textoverlay7").html("¿Cuánto mide el dragón de Komodo?");
      $(".opcionQuiz3").css("display","block");
      $('.menuVideo').attr('disabled', 'disabled')

    }
    
    $("#answer10").on('click', function(event){ 

      event.stopPropagation();
      event.stopImmediatePropagation();

      $(".opcionQuiz3").css("display","none");
      $(".textoverlay7").html("¡¡Enhorabuena, has acertado!!");
      $('.menuVideo').removeAttr('disabled')

      clip.play();
      contestado4=true;

  });
  
  $("#answer11,#answer12,#answer13").on('click', function(event){ 

    event.stopPropagation();
    event.stopImmediatePropagation();

    $(".opcionQuiz3").css("display","none");
    $(".textoverlay7").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: 2.6 metros.");
    $('.menuVideo').removeAttr('disabled')

    clip.play();
    contestado4=true;

  });

  }else{

    $(".textoverlay7").html("");
    $(".textoverlay7").css("display", "none")

    contestado4=false;

  }

  //INFORMACIÓN 2
  if(clip.currentTime >= 82 && clip.currentTime < 88){

    $(".textoverlay8").html("Los camaleones cambian de color para adaptarse a cualquier medio existente.");
  
  }else{

    $(".textoverlay8").html("");

  }

  if(clip.currentTime >= 83 && clip.currentTime < 89){

    $(".linkCamaleon").css("display","block");
    $(".linkCamaleon").html("Pulsa aquí para descubrir más información acerca del famoso camuflaje de los camaleones."); 
  
  }else{

    $(".linkCamaleon").css("display","none");
    $(".linkCamaleon").html("");

  }

  //VOLVER A REPRODUCIR
  if(clip.currentTime + 20 >= clip.duration){

    $("#volverAreproducir").css("display","block");

  }else{

    $("#volverAreproducir").css("display","none");

  }

  
}


var contador = setInterval(checkQuiz, 1000); 

});



