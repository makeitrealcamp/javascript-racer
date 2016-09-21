$(document).ready(function(){
	var count=5;
	var counter=setInterval(timer, 1000);
	function timer(){
		if (count <= 0){
			return clearInterval(counter);
		} 
		count=count-1;
	 	$('#timer').html(count);
	}
	function race(){
		var startLine = $('.car').position().left;
		var finishLine = startLine + 900;
		$(this).bind('keyup', function(e){	
			$(this).keyup(function(e){		
				if (e.which == 80){
					var player1Pos = $('#player1').position();
					if(player1Pos.left < finishLine){
						var move = player1Pos.left + 20;
						$('#player1').offset({left:move});
						console.log(player1Pos.left + " "+ finishLine)
					}
				} else if (e.which == 81){
					var player1Pos = $('#player2').position();
					if(player1Pos.left < finishLine){
						var move = player1Pos.left + 20;
						$('#player2').offset({left:move});
						console.log(player1Pos.left + " "+ finishLine)
					}
				}
			});
			$(this).keyup(function(event){
		        var key_code = event.keyCode ? event.keyCode : event.which;
		        if((key_code  >=80 && key_code  <=122) || (key_code  >=48 && key_code <=57)){
		           $('#cnt').append('<span>'+ ++count + '</span>');
		        }     
		    });
		});
	}
	$('#start-race').on('click', function(){
		console.log("I was clicked");
	});
});
