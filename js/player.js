function Player(name) {
  this.name = name;
  this.isActive = false;

}

// Player.prototype.activate = function() { //Delect these two in favor of the switch prototype?

//   this.isActive = true;

// };

// Player.prototype.deactivate = function() { //Delect these two in favor of the switch prototype?

//   this.isActive = false;

// };

// Player.prototype.switchActive = function(){ //Could use toggleClass() to switch 'active' on or off a selected element
  
//   // var currentPlayer; 
  
//   if($('#player1').hasClass('active')){

//     $('#player2').addClass('active');
//     $('#player1').removeClass('active');

//   } else {

//     $('#player1').addClass('active');
//     $('#player2').removeClass('active');

//   }

// };


// //Instantiate player prototypes to bind click handlers for hover and for click effects on box.li
//   //Bind function within the anonymous function of the player
// Player.prototype.clickHandler = function(){}

// Player.prototype.hoverHandler = function(){}