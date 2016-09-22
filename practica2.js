/*

$(document).keydown(function(tecla){ 
            if (tecla.keyCode == 65) { 
                $('.active1'); 
            }else if(tecla.keyCode == 83) { 
                $('.active2'); 
            } 
        });
        */

/*

var activeMove = $('.active1').next()
activeMove.addClass('active1') 

var activeActual = $('.active1')
activeActual.removeClass('active1')

var siguiente = $('.active2').next()
siguiente.addClass('active1')

var siguienteRem = $('.active2')
siguienteRem.removeClass('active2')*/


$('.counter').click(function(event){
	var time = document.getElementById("time");
	setInterval(function(){
		time.innerHTML= time.innerHTML-1
	},1000);

})	

var reload=$('.counter')
reload.clearInterval()	

/*function myFn() {console.log('idle');}

var myTimer = setInterval(myFn, 4000);

// Then, later at some future time, 
// to restart a new 4 second interval starting at this exact moment in time
clearInterval(myTimer);
myTimer = setInterval(myFn, 4000);
*/


$(document).keydown(function(tecla){
	var activeMove = $('.active1').next() 
	var activeActual = $('.active1')
	var siguiente = $('.active2').next()
	var siguienteRem = $('.active2')
	if (tecla.keyCode == 65) { 
		activeMove.addClass('active1')
		activeActual.removeClass('active1')
		/*activeActual.removeClass('active1')*/
		/*$('.active1').addClass().next('td');*/ 

	}else if(tecla.keyCode == 83) { 
		siguiente.addClass('active2')
		siguienteRem.removeClass('active2')
		/*$('.active2').removeClass().next('td');*/ 
	}

});



/*
$(document).ready(function() {
    $('.counter').countDown({
        targetDate: {
            'day':         13,
            'month':     6,
            'year':     2012,
            'hour':     15,
            'min':         14,
            'sec':         0
        },
        omitWeeks: true,
        onComplete: function() {
           alert('FIN DE LA CUENTA');
           $('.counter').hide();
        }
    });
});
*/
/*
$(function()

{

$('.counter').epiclock({mode: 'countdown', target: '2012 12 30 15:00:00'});

});*/


/*
var activeActual = $('.active2')
activeActual.removeClass('active1')

var siguiente = $('.active2').next()
siguiente.addClass('active1')

$(document).keydown(function(tecla){ 
            if (tecla.keyCode == 65) { 
            	activeActual.removeClass('active2')
                /*$('.active1').addClass().next('td'); 
            }else if(tecla.keyCode == 83) { 
            	siguiente.addClass('active2')
                /*$('.active2').removeClass().next('td');
            } else{
            	activeActual
            }
        });



var activeActual = $('.active1')
activeActual.removeClass('active1')

var siguiente = $('.active1').next()
siguiente.addClass('active1')




$( "active1" ).addClass(function( index, currentClass ) {
  var addedClass;
 
  if ( currentClass === "red" ) {
    addedClass = "green";
    $( "p" ).text( "There is one green div" );
  }
 
  return addedClass;
});
</script>

*/






















/*function moneda(){
	this.nombre
this.tipoDeCambio
this.mensaje = ["no hay yenes para ti", "monto demasiado alto", "intenta otro numero"

]


this.convertir = function(monto){

conversionResultado = monto * this.tipoDeCambio

var mensajeHTML


if(conversionResultado <=0){

mensajeHTML = this.mensaje[0]

}else if(monto ==13){
mensajeHTML = this.mensaje[2]

}else if(monto >1000){

mensajeHTML = this.mensaje[1]


}else{

mensajeHTML = monto + " dolares son " + conversionResultado + " " + this.nombre

}

document.getElementById('resultadoDelCambio').innerHTML = mensajeHTML

}

}

var yen = new moneda()
yen.nombre = "yenes"
yen.tipoDeCambio = 99.5

var sol = new moneda()
sol.nombre = "soles"
sol.tipoDeCambio = 2.7


function convertirMoneda(tipoDeMoneda){

	var montoSeleccionado = document.getElementById('monto').value
    
     if(tipoDeMoneda == "yen"){

     	yen.convertir(montoSeleccionado)

     } else if (tipoDeMoneda == "sol"){

        sol.convertir(montoSeleccionado)

     }

}

*/








