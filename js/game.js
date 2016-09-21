
$(function() {



  function Player( playerID, position ){
    this.playerID = playerID;
    this.position = position || 0;
  }

  function Race(status, players, length ){
    this.status = status || 'start';
    this.players = players;
    this.length = length;
  }

  function winner(race,player){
    return (race.players[player].position >= race.length) ? true : false;
  }

  function moveOnePosition(race, player, callback){

    if ( !callback(race,player) && race.status === 'onGoing' ){
        race.players[player].position += 1;
        console.log(`${player} position: ${race.players[player].position}` );
    }

    if ( callback(race,player ) && race.status === 'onGoing' ){
        console.log(`${race.players[player].playerID} is the Winner!`)
        race.status = 'end';
    }

  }

  function proccessKey(key, race, player, callback){
    if ( event.which == key ) {
      callback(race, player, winner);
    }
  }

  function keyStrokesListener(key, race, player, callback, callbackCallback){
    $( 'body' ).keyup(function(event) {
        callback(key, race, player, callbackCallback);
    });
  }

  function resetGame(race){
    race.status = 'onGoing';
    console.log('RESTART GAME!');
    $.each(race.players, function( index, value ) {
      race.players[index].position = 0;
    });
  }

  function startGame(){
    var p1 = new Player('Juan');
    var p2 = new Player('German');
    var p3 = new Player('Carlos');
    var race = new Race('onGoing', {p1,p2,p3}, 5);

    keyStrokesListener(81, race, 'p1', proccessKey, moveOnePosition);
    keyStrokesListener(80, race, 'p2', proccessKey, moveOnePosition);
    keyStrokesListener(85, race, 'p3', proccessKey, moveOnePosition);
    keyStrokesListener(82, race, '', proccessKey, resetGame);
    // keyStrokesListener(80, proccessKey, player);

    console.log(race)

  }

  startGame();

});
