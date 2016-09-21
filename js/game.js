
$(function() {
  // Handler for .ready() called.

  function moveOnePosition(race, player){
    race.players[player].position += 1;
    // console.log(race);
    console.log(`${player} position: ${race.players[player].position}` );
    race.status = 'on going';
  }

  function logArrayElements(element, index, array) {
    console.log("a[" + index + "] = " + element);
  }

  function Player( playerID, position ){
    this.playerID = playerID;
    this.position = position || 0;
  }

  function Race(status, players ){
    this.status = status;
    this.players = players;
  }

  function proccessKey(key, race, player, callback){
    if ( event.which == key ) {
      callback(race, player);
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
    var race = new Race('start', {player1,player2});
    keyStrokesListener(81, race, 'player1', proccessKey);
    keyStrokesListener(80, race, 'player2', proccessKey);
    // keyStrokesListener(80, proccessKey, player);

    console.log(race)

  }

  startGame();

});
