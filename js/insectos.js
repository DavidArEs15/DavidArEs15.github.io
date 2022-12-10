function volverAreproducir() { 

  var clip = document.getElementById('video');
  clip.currentTime = 0;
}

function elegirPelicula(){ 
  
  var clip=$("#video").attr("src","videos/los insectos.mp4")
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
  if(clip.currentTime >= 15 && clip.currentTime < 22){

    $(".textoverlay4").html("Las abejas son los únicos insectos que producen alimentos comestibles para los seres humanos.");
  
  }else{

    $(".textoverlay4").html("");

  }

  if(clip.currentTime >= 16 && clip.currentTime < 23){

    $(".linkAbejas").css("display","block");
    $(".linkAbejas").html("Pulsa aquí para aprender mucho más sobre las abejas y sus características."); 

  }else{

    $(".linkAbejas").css("display","none");
    $(".linkAbejas").html("");

  }

  //PREGUNTA 1
  if(clip.currentTime >= 30 && clip.currentTime < 35){

    if(!contestado){

      clip.pause();
      $(".textoverlay").css("display", "block")
      $(".textoverlay").html("¿De qué se alimentan las abejas?");
      $(".opcionQuiz").css("display","block");
      $('.menuVideo').attr('disabled', 'disabled')
      
    }
    
    $("#answer2").on('click', function(event){ 

      event.stopPropagation();
      event.stopImmediatePropagation();

      $(".opcionQuiz").css("display","none");
      $(".textoverlay").html("¡¡Enhorabuena, has acertado!!");
      $('.menuVideo').removeAttr('disabled')

      clip.play();
      contestado=true;

  });
  
  $("#answer1,#answer3,#answer4").on('click', function(event){ 

    event.stopPropagation();
    event.stopImmediatePropagation();

    $(".opcionQuiz").css("display","none");
    $(".textoverlay").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Miel y polen.");
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
  if(clip.currentTime >= 46 && clip.currentTime < 51){

    if(!contestado2){

      clip.pause();
      $(".textoverlay5").css("display", "block")
      $(".textoverlay5").html("¿Cuántas especies de hormigas hay en el mundo?");
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
      $(".textoverlay5").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Más de 10000.");
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
  if(clip.currentTime >= 64 && clip.currentTime < 68){

    if(!contestado3){

      clip.pause();
      $(".textoverlay6").css("display", "block")
      $(".textoverlay6").html("¿Cómo se les denomina a los insectos recién nacidos que acaban de abandonar el huevo?");
      $(".sendAnswer").css("display","block");

    }

    $("#answer9").on('click', function(event){

      event.stopPropagation(); 
      event.stopImmediatePropagation();  

      $(".sendAnswer").css("display","none");

      if($("#answerEscrita").val().toLowerCase() == "larvas"){ 

      $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");

      }else if($("#answerEscrita").val().toLowerCase() == "larvas de insecto"){

      $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");
      $("#answerEscrita").val("");

      }

      else{

      $(".textoverlay6").html("Lo sentimos, no has introducido la respuesta correcta. SOLUCIÓN: Larvas.");
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
  if(clip.currentTime >= 77 && clip.currentTime < 83){

    if(!contestado4){

      clip.pause();
      $(".textoverlay7").css("display", "block")
      $(".textoverlay7").html("¿Cuál de los siguientes no es un tipo de gusano?");
      $(".opcionQuiz3").css("display","block");
      $('.menuVideo').attr('disabled', 'disabled')

    }
    
    $("#answer13").on('click', function(event){ 

      event.stopPropagation();
      event.stopImmediatePropagation();

      $(".opcionQuiz3").css("display","none");
      $(".textoverlay7").html("¡¡Enhorabuena, has acertado!!");
      $('.menuVideo').removeAttr('disabled')

      clip.play();
      contestado4=true;

  });
  
  $("#answer10,#answer11,#answer12").on('click', function(event){ 

    event.stopPropagation();
    event.stopImmediatePropagation();

    $(".opcionQuiz3").css("display","none");
    $(".textoverlay7").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Lepidóptero.");
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
  if(clip.currentTime >= 101 && clip.currentTime < 108){

    $(".textoverlay8").html("La mariposa más grande conocida en la actualidad se encuentra en Nueva Guinea y puede medir hasta 31 cm.");
  
  }else{

    $(".textoverlay8").html("");

  }

  if(clip.currentTime >= 102 && clip.currentTime < 109){

    $(".linkMariposas").css("display","block");
    $(".linkMariposas").html("Pulsa aquí para descubrir más información y curiosidades acerca de las mariposas que habitan nuestro planeta."); 
  
  }else{

    $(".linkMariposas").css("display","none");
    $(".linkMariposas").html("");

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



