function volverAreproducir() { 

  var clip = document.getElementById('video');
  clip.currentTime = 0;
}

function elegirPelicula(){ 
  
  var clip=$("#video").attr("src","videos/los peces.mp4")
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
  if(clip.currentTime >= 15 && clip.currentTime < 19){

    $(".textoverlay4").html("Los peces pueden memorizar durante meses, especialmente a sus predadores.");
  
  }else{

    $(".textoverlay4").html("");

  }

  if(clip.currentTime >= 16 && clip.currentTime < 20){

    $(".linkPez").css("display","block");
    $(".linkPez").html("Pulsa aquí para aprender más sobre los peces y sus características."); 

  }else{

    $(".linkPez").css("display","none");
    $(".linkPez").html("");

  }

  //PREGUNTA 1
  if(clip.currentTime >= 21 && clip.currentTime < 27){

    if(!contestado){

      clip.pause();
      $(".textoverlay").css("display", "block")
      $(".textoverlay").html("¿Qué especie de pez es este?");
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
    $(".textoverlay").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Pez León.");
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
  if(clip.currentTime >= 34 && clip.currentTime < 41){

    if(!contestado2){

      clip.pause();
      $(".textoverlay5").css("display", "block")
      $(".textoverlay5").html("¿Cuánto pueden llegar a medir las rayas del mar Mediterráneo?");
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
      $(".textoverlay5").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: 120 cm.");
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
  if(clip.currentTime >= 60 && clip.currentTime < 64){

    if(!contestado3){

      clip.pause();
      $(".textoverlay6").css("display", "block")
      $(".textoverlay6").html("¿Qué nombre recibe una agrupación de peces?");
      $(".sendAnswer").css("display","block");

    }

    $("#answer9").on('click', function(event){

      event.stopPropagation(); 
      event.stopImmediatePropagation();  

      $(".sendAnswer").css("display","none");

      if($("#answerEscrita").val().toLowerCase() == "banco de peces"){ 

      $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");

      }else if($("#answerEscrita").val().toLowerCase() == "banco"){

      $(".textoverlay6").html("¡¡Enhorabuena, has acertado!!");
      $("#answerEscrita").val("");

      }

      else{

      $(".textoverlay6").html("Lo sentimos, no has introducido la respuesta correcta. SOLUCIÓN: Banco de Peces.");
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
  if(clip.currentTime >= 71 && clip.currentTime < 75){

    if(!contestado4){

      clip.pause();
      $(".textoverlay7").css("display", "block")
      $(".textoverlay7").html("¿Qué utilizan como microhábitat los peces payaso?");
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
    $(".textoverlay7").html("Lo sentimos, no has seleccionado la respuesta correcta. SOLUCIÓN: Anémonas.");
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
  if(clip.currentTime >= 93 && clip.currentTime < 100){

    $(".textoverlay8").html("Todos los peces payaso nacen macho y tienen la capacidad de cambiar de sexo.");
  
  }else{

    $(".textoverlay8").html("");

  }

  if(clip.currentTime >= 94 && clip.currentTime < 101){

    $(".linkPayaso").css("display","block");
    $(".linkPayaso").html("Pulsa aquí para descubrir más información acerca de los peces payaso."); 
  
  }else{

    $(".linkPayaso").css("display","none");
    $(".linkPayaso").html("");

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



