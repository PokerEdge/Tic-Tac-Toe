//Contain object oriented code within an anonymous self-executing function

(function(){

  var Player = {

    init: function() {
      this.name = name;
      this.symbol = symbol;
      this.box = $('li.box');
      this.boxfiller();
      this.bindEvents();
      this.squares;
    },


    boxfiller: function() {
      //return active player's box fill class, e.g. box-filled-1
      if(player.name).hasClass('active'){
        return player.name;
      }

    },

    bindEvents: function() { //bind hover and click separately to manage the background color differences?
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

    newGame: function() { // init game by applying all reset functionality, displaying #board, etc.

    },

    var winCombinations = [ //What the hell is this?

      //Horizontal wins
      [0,1,2], [3,4,5], [6,7,8],

      //Vertical wins
      [0,3,6], [1,4,7], [2,5,8],

      //Diagonal wins
      [0,4,8], [2,4,6]

      ];


  }

  //Set player name based on user input or to a unique tic-tac-toe symbol
  var player1Name = prompt("What's player 1's name?") || "o";
  var player2Name = prompt("What's player 2's name?") || "x";

  player1 = new Player(player1Name);
  player2 = new Player(player2Name);

  Player.init();

})();






//Tic-tac-toe
  //Properties
    //Name
    //Symbol or fill class



  //Methods
    //init() --> show start screen
    //
    //move() --> new player is activated
    //findBestMove() --> recursively value spots from end game states to the current game state





// //Test if game is won
// function isGameWon(){

//   //If game is won, display win screen and winning player name and message, e.g. "Grats player1.name"

//   // var wins = 

//   //   [
//   //     //Horizontal wins
//   //     [0,1,2], [3,4,5], [6,7,8],

//   //     //Vertical wins
//   //     [0,3,6], [1,4,7], [2,5,8],

//   //     //Diagonal wins
//   //     [0,4,8], [2,4,6]

//   //   ];

//   var activePlayerClass = "";
//   // var activePlayerName = "";
  
//   var symbolCount = 0;
  
//   if(('#player1').hasClass('active')){

//     activePlayerClass = "box-filled-1";
//     // activePlayerName = player1.name; //DOES NOT NEED TO BE SET?

//   } else {

//     activePlayerClass = "box-filled-2";
//     // activePlayerName = player2.name; //DOES NOT NEED TO BE SET?

//   }


//   //Loop through box list elements to check for series of filled boxes that equate to a win
//   for(var i = 0; i < i < 3; i++){

//     for(var j = 0; j < 3; j++){

//       //Check horizontal wins (if row is full)
//       if(i === j && $('.boxes').children().eq(i).hasClass(activePlayerClass)){

//         symbolCount++;
//         console.log("symbolCount is being incremented");

//         //Check series of 3 in a row
//         if (symbolCount === 3) {

//           //Hide game board and show activePlayerName wins screen
//           $('#board').hide();

//           //Use 'activePlayerName' to dynamically update #finish screen's HTML
//           $('#finish').show();
            
//             //Dynamically insert message to reflect winning player and styles (prepend .button)
//               //Style button color according to winning player
//               //Style background color according to winning player

//             //Insert message to reflect tied game and styles
//               //Dynamically insert message to reflect tied game (prepend .button)
//                 //Style button color according to tied game
//                 //Style background color according to tied game

//         }

        

//       }

//     }

    
      

//     //Check vertical wins
//       //Check series for every 3rd box in a row with index of one of the first list items

//     //Check diagonal wins
//       //Be specific with 2 combinations for diagonals

//     //If game is not won and all squares are filled, display tie game screen with message, e.g. "Tied"  

//     //Else game is not won and not all squares are filled, so game continues
//       //console.log("No winner found");


//   }

// }

  //Check to see if square is enabled (not disabled)

    //Fill square with active player's symbol (give the box li the class of .box-filled-1 or .box-filled-2)
      //$(this).animate();
  



// function fillSquare(){

//   var boxesArray = [];
//   var symbolClass;

//   if($('#player1').hasClass('active')){
//     symbolClass = 'box-filled-1';
//   }

//   if ($('#player2').hasClass('active')){
//     symbolClass = 'box-filled-2';
//   }

//   for(var i = 0; i < $('.boxes').length; i++){
//     boxesArray.push(i);

//     if($(this) === boxesArray[i]){
//       $('.boxes').eq(i).addClass(symbolClass);
//     }
//   }
// }


//BIND EVENTS INSIDE OF NEWGAME() as a prototype


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


// // //Instantiate player prototypes to bind click handlers for hover and for click effects on box.li
// //   //Bind function within the anonymous function of the player
// // Player.prototype.clickHandler = function(){}

// // Player.prototype.hoverHandler = function(){}