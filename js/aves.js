function volverAreproducir() { 

  var clip = document.getElementById('video');
  clip.currentTime = 0;
}

function elegirPelicula(){ 
  
  var clip=$("#video").attr("src","videos/las aves.mp4")
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
  if(clip.currentTime >= 8 && clip.currentTime < 16){

    $(".textoverlay4").html("Los loros comen con las patas, agarran la comida con una de ellas y se la llevan al pico. Además, son ambidiestros.");
  
  }else{

    $(".textoverlay4").html("");

  }

  if(clip.currentTime >= 10 && clip.currentTime < 18){

    $(".linkLoros").css("display","block");
    $(".linkLoros").html("Pulsa aquí para aprender mucho más sobre los loros y sus características."); 

  }else{

    $(".linkLoros").css("display","none");
    $(".linkLoros").html("");

  }

  //PREGUNTA 1
  if(clip.currentTime >= 30 && clip.currentTime < 33){

    if(!contestado){

      clip.pause();
      $(".textoverlay").css("display", "block")
      $(".textoverlay").html("¿De qué se alimenta el colibrí?");
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
    $(".textoverlay").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Néctar de las flores.");
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
  if(clip.currentTime >= 34 && clip.currentTime < 40){

    if(!contestado2){

      clip.pause();
      $(".textoverlay5").css("display", "block")
      $(".textoverlay5").html("¿A qué velocidad máxima pueden llegar a correr las avestruces?");
      $(".opcionQuiz2").css("display","block");
      $('.menuVideo').attr('disabled', 'disabled')

    }
    
    $("#answer8").on('click', function(event){ 

      event.stopPropagation();
      event.stopImmediatePropagation();

      $(".opcionQuiz2").css("display","none");
      $(".textoverlay5").html("¡¡Enhorabuena, has acertado!!");
      $('.menuVideo').removeAttr('disabled')

      clip.play();
      contestado2=true;

  });
  
  $("#answer5,#answer6,#answer7").on('click', function(event){ 

      event.stopPropagation();
      event.stopImmediatePropagation();

      $(".opcionQuiz2").css("display","none");
      $(".textoverlay5").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: 70 km/h.");
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
  if(clip.currentTime >= 42 && clip.currentTime < 47){

    if(!contestado3){

      clip.pause();
      $(".textoverlay6").css("display", "block")
      $(".textoverlay6").html("¿Dónde buscan las gaviotas su alimento?");
      $(".sendAnswer").css("display","block");

    }

    $("#answer9").on('click', function(event){

      event.stopPropagation(); 
      event.stopImmediatePropagation();  

      $(".sendAnswer").css("display","none");

      if($("#answerEscrita").val().toLowerCase() == "en el mar"){ 

      $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");

      }else if($("#answerEscrita").val().toLowerCase() == "mar"){

      $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");
      $("#answerEscrita").val("");

      }

      else{

      $(".textoverlay6").html("Lo sentimos, no has introducido la respuesta correcta. SOLUCIÓN: En el mar.");
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
  if(clip.currentTime >= 52 && clip.currentTime < 58){

    if(!contestado4){

      clip.pause();
      $(".textoverlay7").css("display", "block")
      $(".textoverlay7").html("¿Cuál de los siguientes animales no es ovíparo?");
      $(".opcionQuiz3").css("display","block");
      $('.menuVideo').attr('disabled', 'disabled')

    }
    
    $("#answer11").on('click', function(event){ 

      event.stopPropagation();
      event.stopImmediatePropagation();

      $(".opcionQuiz3").css("display","none");
      $(".textoverlay7").html("¡¡Enhorabuena, has acertado!!");
      $('.menuVideo').removeAttr('disabled')

      clip.play();
      contestado4=true;

  });
  
  $("#answer10,#answer12,#answer13").on('click', function(event){ 

    event.stopPropagation();
    event.stopImmediatePropagation();

    $(".opcionQuiz3").css("display","none");
    $(".textoverlay7").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Murciélago.");
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
  if(clip.currentTime >= 65 && clip.currentTime < 74){

    $(".textoverlay8").html("Los pollitos utilizan la punta del pico para romper la cáscara.");
  
  }else{

    $(".textoverlay8").html("");

  }

  if(clip.currentTime >= 67 && clip.currentTime < 76){

    $(".linkHuevos").css("display","block");
    $(".linkHuevos").html("Pulsa aquí para descubrir más información acerca del proceso de eclosión de los huevos."); 
  
  }else{

    $(".linkHuevos").css("display","none");
    $(".linkHuevos").html("");

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



