console.log("La app sirve")
/*funcion para correr funciones despues de cargar el dom*/
$(document).ready(function(){
	/*función para hacer que se cambien las clases cuando se presiona el teclado*/
	$( document ).keyup(function(event) {
		var last1 = $(".last1");
		var last2 = $(".last2");
	     if (event.which === 80) {// busca la letra P
	     	console.log(event.which + ": # de la tecla P");
	     	$(".active1").removeClass("active1").next().addClass("active1");          	     	
	     	console.log( "Tecla P jugador 1: funciona y se mueve" );	     	
	     		if( last1.hasClass('active1')){
	     			alert("Gana el player 1");
	     		}

	     }
	     else if (event.which === 81) {// busca la letra Q
	     	console.log(event.which + ": # de la tecla Q");
	     	$(".active2").removeClass("active2").next().addClass("active2");          	     	
	     	console.log( "Tecla P jugador 2: funciona y se mueve" );	     	
	     		if( last2.hasClass('active2')){
	     			alert("Gana el player 2");
	     		}

	     }
		
		
	});

});










