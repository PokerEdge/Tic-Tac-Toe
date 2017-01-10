$('#board').hide();
$('#finish').hide();

//BIND EVENTS INSIDE OF NEWGAME() as a prototype

//Show refreshed tic-tac-toe board on button click 
$('.button').click(function newGame() {
  
  $('div#start').hide();
  $('div#finish').hide();
  $('div#board').show();

  //Remove symbol elements form a board of any size
  for(var i = 0; i < $('.boxes').children().length; i++){

    $('.boxes').children().eq(i).removeClass('box-filled-1').removeClass('box-filled-2');

  }

  //Set player name based on user input
  var player1Name = prompt("What's player 1's name?") || "o";
  var player2Name = prompt("What's player 2's name?") || "x";

  player1 = new Player(player1Name);
  player2 = new Player(player2Name);

  //Have player name occupy player box, rather than the symbol svg, if player name != 'x' or 'o'
     //Hide SVG is player name is not 'x' or 'o' and symbol with prompted name text
  if(player1Name && (player1Name !== "o")){
    //Hide SVG and show HTML of non-symbol name
    $('#player1 svg').hide();
    $('#player1').html("<p>" + player1.name + "</p>");


      //toggle() with player1Name
    console.log("o will be replaced");

  }

  if(player2Name && (player2Name !== "x")){
    //Hide SVG and show HTML of non-symbol name
    $('#player2 svg').hide();
    $('#player2').html("<p>" + player2.name + "</p>");


      //toggle() with player2Name
    console.log("x will be replaced");

  }


  //Randomly set active player on board load
  $('#player1').removeClass('active');
  $('#player2').removeClass('active');

  if(Math.random() < 0.5) {
    
    // player1.activate();
    // player2.deactivate();
    $('#player1').addClass('active');

  } else {

    // player2.activate();
    // player1.deactivate();
    $('#player2').addClass('active');

  }

    //Hover event handler: functions that fire on mouse on and on mouse off
  $('li.box').hover(function() {

    //HOVER BACKGROUND COLOR SHOULD BE GREY, NOT THE COLOR OF THE ACTIVE PLAYER
      //Display active class player's symbol with a lower opacity while mouse is over
            //$(this).animate();


    //Check for which player hasClass active AND if square is enabled (not disabled)
    if($('#player1').hasClass('active')){

      if(!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')){

        $(this).addClass('box-filled-1');

      }
    }

    if($('#player2').hasClass('active')){
    //  if(player2.isActive){

      if(!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')){

        $(this).addClass('box-filled-2');

      }
    }
  },
      //remove() active player's symbol and hover effects when mouse is NOT over

    function() {
      
      $(this).removeClass('box-filled-1').removeClass('box-filled-2');

    }
  );

  //Fill a square with the active player's symbol on click
    //Square is then disabled for the remainder of the game

  $('li.box').click(function() {

    //Toggle active class between players - change boolean in constructor here  //currentPlayer.switchActive();
    
    var activePlayer = "";

    if($('#player1').hasClass('active')){ //ALSO CHECK IF BOX IS EMPTY

      //Add CSS animation to the addClass effect of 'adding' the SVG
      if(!$(this).hasClass('box-filled-2')){ //NECESSARY?
    
        $(this).addClass('box-filled-1');

        //Add CSS animation to the addClass effect of 'adding' the SVG
        $('#player2').addClass('active');
        $('#player1').removeClass('active'); //Make this part of a prototype somehow (isActive?)


        //Unbind hover event handler from 'this' box
        activePlayer = player1.name;

        $(this).off('mouseenter mouseleave');
        $(this).off('click');
        
        return isGameWon(activePlayer);

      }
    }

    if($('#player2').hasClass('active')){ //ALSO CHECK IF BOX IS EMPTY
      
      if(!$(this).hasClass('box-filled-1')){
        
        $(this).addClass('box-filled-2');

        //Add CSS animation to the addClass effect of 'adding' the SVG
        $('#player1').addClass('active');
        $('#player2').removeClass('active');


        activePlayer = player2.name;

        //Unbind hover event handler from 'this' box
        $(this).off('mouseenter mouseleave');
        $(this).off('click');
        
        return isGameWon(activePlayer); //By active player (by player that hasClass 'active')
      }
    }
  });
});

//Checks all variations of game for possible winning or tying combinations and calls function to display proper end game screen
function isGameWon(activePlayer){

  var symbolCount = 0;

  for(var i = 0; i < $('.boxes').children().length; i++){
    
    if($('.boxes').children().eq(i).hasClass('box-filled-1') || $('.boxes').children().eq(i).hasClass('box-filled-2')){
      
      //Check if row 1 is a winner [0,1,2]
      symbolCount = 0;

      for(var r1 = 0; r1 < 3; r1++){
        
        symbolCount++; //PLACEMENT OF THIS INCREMENTOR IS ERRONEOUS AND CAUSING ADDITIONAL COUNTING
        
        if(symbolCount === 3 && 
          ($('.boxes').children().eq(0).hasClass('box-filled-1') && $('.boxes').children().eq(1).hasClass('box-filled-1') && $('.boxes').children().eq(2).hasClass('box-filled-1')) || 
          ($('.boxes').children().eq(0).hasClass('box-filled-2') && $('.boxes').children().eq(1).hasClass('box-filled-2') && $('.boxes').children().eq(2).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
              return displayFinish(activePlayer) + console.log("Row 1 has 3 in a row");
        }
      }

      //Check if row 2 is a winner [3,4,5]
      symbolCount = 0;

      for(var r2 = 0; r2 < 3; r2++){
        
        symbolCount++;
        
        if(symbolCount === 3 && 
          ($('.boxes').children().eq(3).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(5).hasClass('box-filled-1')) || 
          ($('.boxes').children().eq(3).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(5).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
              return displayFinish(activePlayer) + console.log("Row 2 has 3 in a row");
        }
      }

      //Check if row 3 is a winner [6,7,8]
      symbolCount = 0;

      for(var r3 = 0; r3 < 3; r3++){
        
        symbolCount++;
        
        if(symbolCount === 3 && 
          ($('.boxes').children().eq(6).hasClass('box-filled-1') && $('.boxes').children().eq(7).hasClass('box-filled-1') && $('.boxes').children().eq(8).hasClass('box-filled-1')) || 
          ($('.boxes').children().eq(6).hasClass('box-filled-2') && $('.boxes').children().eq(7).hasClass('box-filled-2') && $('.boxes').children().eq(8).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
              return displayFinish(activePlayer) + console.log("Row 3 has 3 in a row");
        }
      }

      //Check if column 1 is a winner [0,3,6]
      symbolCount = 0;

      for(var c1 = 0; c1 < 3; c1++){
        
        symbolCount++;
        
        if(symbolCount === 3 && 
          ($('.boxes').children().eq(0).hasClass('box-filled-1') && $('.boxes').children().eq(3).hasClass('box-filled-1') && $('.boxes').children().eq(6).hasClass('box-filled-1')) || 
          ($('.boxes').children().eq(0).hasClass('box-filled-2') && $('.boxes').children().eq(3).hasClass('box-filled-2') && $('.boxes').children().eq(6).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
              return displayFinish(activePlayer) + console.log("Col 1 has 3 in a row");
        }
      }

      //Check if column 2 is a winner [1,4,7]
      symbolCount = 0;

      for(var c2 = 0; c2 < 3; c2++){
        
        symbolCount++;
        
        if(symbolCount === 3 && 
          ($('.boxes').children().eq(1).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(7).hasClass('box-filled-1')) || 
          ($('.boxes').children().eq(1).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(7).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
              return displayFinish(activePlayer) + console.log("Col 2 has 3 in a row");
        }
      }

      //Check if column 3 is a winner [2,5,8]
      symbolCount = 0;

      for(var c1 = 0; c1 < 3; c1++){
        
        symbolCount++;
        
        if(symbolCount === 3 && 
          ($('.boxes').children().eq(2).hasClass('box-filled-1') && $('.boxes').children().eq(5).hasClass('box-filled-1') && $('.boxes').children().eq(8).hasClass('box-filled-1')) || 
          ($('.boxes').children().eq(2).hasClass('box-filled-2') && $('.boxes').children().eq(5).hasClass('box-filled-2') && $('.boxes').children().eq(8).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
              return displayFinish(activePlayer) + console.log("Col 3 has 3 in a row");
        }
      }

      //Check if diagonal 1 is a winner [0,4,8]
      symbolCount = 0;

      for(var d1 = 0; d1 < 3; d1++){
        
        symbolCount++;
        
        if(symbolCount === 3 && 
          ($('.boxes').children().eq(0).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(8).hasClass('box-filled-1')) || 
          ($('.boxes').children().eq(0).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(8).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
              return displayFinish(activePlayer) + console.log("Diagonal 1 has 3 in a row");
        }
      }

      //Check if diagonal 2 is a winner [2,4,6]
      symbolCount = 0;

      for(var d2 = 0; d2 < 3; d2++){
        
        symbolCount++;
        
        if(symbolCount === 3 && 
          ($('.boxes').children().eq(2).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(6).hasClass('box-filled-1')) || 
          ($('.boxes').children().eq(2).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(6).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
            return displayFinish(activePlayer) + console.log("Diagonal 2 has 3 in a row");
        }
      }

      
        //CHECK IF NO WIN && ALL BOXES HAVE A FILL CLASS
        if ( ($('.boxes').children().eq(0).hasClass('box-filled-1') || $('.boxes').children().eq(0).hasClass('box-filled-2')) 
          && ($('.boxes').children().eq(1).hasClass('box-filled-1') || $('.boxes').children().eq(1).hasClass('box-filled-2')) 
          && ($('.boxes').children().eq(2).hasClass('box-filled-1') || $('.boxes').children().eq(2).hasClass('box-filled-2')) 
          && ($('.boxes').children().eq(3).hasClass('box-filled-1') || $('.boxes').children().eq(3).hasClass('box-filled-2')) 
          && ($('.boxes').children().eq(4).hasClass('box-filled-1') || $('.boxes').children().eq(4).hasClass('box-filled-2')) 
          && ($('.boxes').children().eq(5).hasClass('box-filled-1') || $('.boxes').children().eq(5).hasClass('box-filled-2')) 
          && ($('.boxes').children().eq(6).hasClass('box-filled-1') || $('.boxes').children().eq(6).hasClass('box-filled-2')) 
          && ($('.boxes').children().eq(7).hasClass('box-filled-1') || $('.boxes').children().eq(7).hasClass('box-filled-2')) 
          && ($('.boxes').children().eq(8).hasClass('box-filled-1') || $('.boxes').children().eq(8).hasClass('box-filled-2'))){
            //Show tie finish screen
            return displayFinish();

        }
    
    }
  }
}

//Hide other screens
function displayFinish(winningPlayer){

  $('div#board').hide();  
  $('div#finish').show();

  $('#finish').removeClass('screen-win-one').removeClass('screen-win-two').removeClass('screen-win-tie');

  
  // <div class="screen screen-win" id="finish">
    
  //   <header>
      
  //     <h1>Tic Tac Toe</h1>
  //     <p class="message"></p>
  //     <a href="#" class="button">New game</a>
    
  //   </header>

  // </div>


  // .screen-win p {
  //   font-size: 6em;
  //   font-weight: 700;
  //   color: #fff;
  //   position: relative; }

  //   .screen-win p:before {
  //     position: absolute;
  //     left: 0;
  //     right: 0;
  //     color: #000;
  //     font-size: 4em;
  //     font-weight: 400;
  //     line-height: 0;
  //     z-index: -1; }


  //Style winning screen for player 1
  if(winningPlayer === player1.name){
    
    $('#finish').addClass('screen-win-one');

    $('p.message').html("Winner");

    //Edit 'message' to show player 1 win message
      //Show "o" or show non-player1.name


    //Edit button text color to be the losing players color (not active player)


    //   .screen-win-one {
    //     background: #FFA000; }

    //   .screen-win-one .button {
    //     color: #3688C3; }

    //   .screen-win-one p:before {
    //     content: "o";
    //     top: 1.75rem; }


  }

  //Style winning screen for player 1
  if(winningPlayer === player2.name){

    $('#finish').addClass('screen-win-two');

    $('p.message').html("Winner");

    //Edit 'message' to show player 2 win message
      //Show "x" or show non-player2.name


    //Edit button text color to be the losing players color (not active player)


    // .screen-win-two {
    //   background: #3688C3; }

    //   .screen-win-two .button {
    //     color: #FFA000; }

    //   .screen-win-two p:before {
    //     content: "×";
    //     top: 4.5rem; }


  }

  //Style winning screen for tie

  //INCORRECT CONDITION IF WE PASS ACTIVE PLAYER... Could pass a not player1.name as a hack
  if(winningPlayer !== player1.name && winningPlayer !== player2.name){
  
    $('#finish').addClass('screen-win-tie');

    $('p.message').html("It's a Tie!");

  }
}

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

