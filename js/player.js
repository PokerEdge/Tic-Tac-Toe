function Player(name) {
  this.name = name;
  var isActive = false;

  //Hide SVG is player name is not 'x' or 'o' and replace with prompted name

}

Player.prototype.activate = function() { //Delect these two in favor of the switch prototype?

  this.isActive = true;

};

Player.prototype.deactivate = function() { //Delect these two in favor of the switch prototype?

  this.isActive = false;

};

Player.prototype.switchActive = function(){ //Could use toggleClass() to switch 'active' on or off a selected element
  
  // var currentPlayer; 
  
  if($('#player1').hasClass('active')){

    $('#player2').addClass('active');
    $('#player1').removeClass('active');

  } else {

    $('#player1').addClass('active');
    $('#player2').removeClass('active');

  }

};

// player1 = new Player(player1Name); //Set player1 name to prompted NON NULL value
// player2 = new Player(player2Name); //Set player2 name to prompted NON NULL value



//Background text for x changes to player1.name;
//Background text for o changes to player2.name;