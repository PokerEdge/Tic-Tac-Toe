$('#board').hide();
$('#finish').hide();


//Show refreshed tic-tac-toe board on button click 
$('.button').click(function newGame() {
  
  $('div#start').hide();
  $('div#finish').hide();
  $('div#board').show();

  //Refresh board
    //each.remove() ?


  var player1Name = prompt("What's player 1's name?", "Enter player 1's name");
  if (player1Name === "Enter player 1's name"){ player1Name = "o"; }

  var player2Name = prompt("What's player 2's name?", "Enter player 2's name");
  if (player2Name === "Enter player 2's name"){ player2Name = "x"; }

  player1 = new Player(player1Name); //Set player1 name to prompted NON NULL value
  player2 = new Player(player2Name); //Set player2 name to prompted NON NULL value


  //Randomly set active player on board load
  if(Math.random() < 0.5) {
    
    // player1.activate();
    // player2.deactivate();
    $('#player1').addClass('active');

  } else {

    // player2.activate();
    // player1.deactivate();
    $('#player2').addClass('active');

  }

  // if(player1.isActive){
  //   $('#player1').addClass('active');
  //   $('#player2').removeClass('active');
  // } else {
  //   $('#player2').addClass('active');
  //   $('#player1').removeClass('active');
  // }
  //Set active player's background color to high opacity and inactive player's background to zero opacity or white

});

//Display win screen with particular conditions (mixmax logic)
function ticTacToe() {
  //Determine if the game has been won
    //Determine who has won the game
      //Show winning screen with winning player's name and color


  //Determine if the game is tied
    //Show tied game screen and text

}

//Hover event handler: functions that fire on mouse on and on mouse off
  //FIND HOVERED BOX INDEX TO MAKE IT FULL ON CLICK... handler within handler?
$('li.box').hover(function() {

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
      //Display active class player's symbol with a lower opacity while mouse is over
        //$(this).animate();
},
    //remove() active player's symbole and hover effects when mouse is NOT over

  function() {
    
    $(this).removeClass('box-filled-1').removeClass('box-filled-2');

  }
);

//Fill a square with the active player's symbol on click
  //Square is then disabled for the remainder of the game

$('li.box').click(function() {

  //Toggle active class between players - change boolean in constructor here  //currentPlayer.switchActive();
  if($('#player1').hasClass('active')){

    //Add CSS animation to the addClass effect of 'adding' the SVG
    $(this).addClass('box-filled-1');

    //Add CSS animation to the addClass effect of 'adding' the SVG
    $('#player2').addClass('active');
    $('#player1').removeClass('active'); //Make this part of a prototype somehow (isActive?)


    //Unbind hover event handler from 'this' box
    $(this).off('mouseenter mouseleave');

    return true;
    
  }

  if($('#player2').hasClass('active')){
    
    // $(this).removeClass('box-filled-1');

    //Add CSS animation to the addClass effect of 'adding' the SVG
    $(this).addClass('box-filled-2');

    //Add CSS animation to the addClass effect of 'adding' the SVG
    $('#player1').addClass('active');
    $('#player2').removeClass('active');

    //Unbind hover event handler from 'this' box
    $(this).off('mouseenter mouseleave');

    return true;
  }

});


function fillSquare(){

  var boxesArray = [];
  var symbolClass;

  if($('#player1').hasClass('active')){
    symbolClass = 'box-filled-1';
  }

  if ($('#player2').hasClass('active')){
    symbolClass = 'box-filled-2';
  }

  for(var i = 0; i < $('.boxes').length; i++){
    boxesArray.push(i);

    if($(this) === boxesArray[i]){
      $('.boxes').eq(i).addClass(symbolClass);
    }
  }
}

//Test if game is won
function GameWon(){

  //If game is won, display win screen and winning player name and message, e.g. "Grats player1.name"
  

  var wins = 

    [
      //Horizontal wins
      [0,1,2], [3,4,5], [6,7,8],

      //Vertical wins
      [0,3,6], [1,4,7], [2,5,8],

      //Diagonal wins
      [0,4,8], [2,4,6]


    ];

  //If game is not won and not all squares are filled, continue game


  //If game is not won and all squares are filled, display tie game screen with message, e.g. "Tied"

}

  //Check to see if square is enabled (not disabled)

    //Fill square with active player's symbol (give the box li the class of .box-filled-1 or .box-filled-2)
      //$(this).animate();
  



