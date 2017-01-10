//Contain object oriented code within an anonymous self-executing function

(function(){

  var Player = {

    init: function() {
      this.name = name;
      this.symbol = symbol;
      this.box = $('li.box');
      this.boxfiller();
      this.bindEvents();
    },

    boxfiller: function() {
      //return active player's box fill class, e.g. box-filled-1

    }

    bindEvents: function() {
      this.box.on('hover', 'click', this.showMove);
    },

    deactivate: function() {
      this.isActive = false;
    },

    activate: function() {
      this.isActive = true;
    },

    showMove: function() {
      //Show square with particular opacity depending on hover or click
      this.box.addClass(boxfiller);

    },

    newGame: function() { // Apply all reset functionality

    },

    var squares = [

      //Horizontal wins
      [0,1,2], [3,4,5], [6,7,8],

      //Vertical wins
      [0,3,6], [1,4,7], [2,5,8],

      //Diagonal wins
      [0,4,8], [2,4,6]

      ];



  }

  //Set player name based on user input
  var player1Name = prompt("What's player 1's name?") || "o";
  var player2Name = prompt("What's player 2's name?") || "x";

  player1 = new Player(player1Name);
  player2 = new Player(player2Name);

  Player.init();

})();