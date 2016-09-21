
$(function() {
  // Handler for .ready() called.

  function winner(race,player){
    if (race.players[player].position >= race.length)
    {
      return true;
    }else{
      return false;
    }
  }

  function moveOnePosition(race, player, callback){

    if ( !callback(race,player) && race.status === 'onGoing' ){
        race.players[player].position += 1;
        console.log(`${player} position: ${race.players[player].position}` );
        // race.status = 'on going';
    }

    if ( callback(race,player) && race.status === 'onGoing' ){
        console.log(`${player} is the Winner!`)
        race.status = 'end';
    }

    // console.log(race);

  }

  function Player( playerID, position ){
    this.playerID = playerID;
    this.position = position || 0;
  }

  function Race(status, players, length ){
    this.status = status;
    this.players = players;
    this.length = length;
  }

  function proccessKey(key, race, player, callback){
    if ( event.which == key ) {
      callback(race, player, winner);
    }
  }

  function keyStrokesListener(key, race, player, callback){
    $( 'body' ).keyup(function(event) {
        callback(key, race, player, moveOnePosition);
    });
  }

  function startGame(){
    var player1 = new Player('Juan');
    var player2 = new Player('German');
    var race = new Race('onGoing', {player1,player2}, 20);
    keyStrokesListener(81, race, 'player1', proccessKey);
    keyStrokesListener(80, race, 'player2', proccessKey);
    // keyStrokesListener(80, proccessKey, player);

    console.log(race)

  }

  startGame();

});
