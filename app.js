/*$(document).ready(function(){
	$(this).bind('keyup', function(e){
		$(this).keyup(function(e){
			if (e.which == 13) {
				$('#player1').offset({left:300});
				var position = $('#player1').position();
				console.log(position);
			}
		});
	});
});
*/
$(document).ready(function(){
	var startLine = $('.car').position().left;
	var finishLine = startLine + 1000;
	$(this).bind('keyup', function(e){	
		$(this).keyup(function(e){		
			if (e.which == 80){
				var player1Pos = $('#player1').position();
				if(player1Pos.left < finishLine){
					var move = player1Pos.left + 10;
					$('#player1').offset({left:move});
					console.log(player1Pos.left + " "+ finishLine)
				}
			} else if (e.which == 81) {
				$('#player2').offset({left:400});
			}
		});
	});
});
