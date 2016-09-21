
$(function() {
  // Handler for .ready() called.

  function proccessKey(key){
    if ( event.which == key ) {
      console.log(`you pressed ${key} code`);
    }
  }

  function keyStrokesListener(key, callback){
    $( 'body' ).keyup(function(event) {
        callback(key, event);
    });
  }

  function startGame(){
    keyStrokesListener(81, proccessKey);
    keyStrokesListener(80, proccessKey);
  }

  startGame();

});
