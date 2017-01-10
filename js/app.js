$('#board').hide();
$('#finish').hide();

//Show initialized a new tic-tac-toe game on button click 
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

  }

  if(player2Name && (player2Name !== "x")){
    
    //Hide SVG and show HTML of non-symbol name
    $('#player2 svg').hide();
    $('#player2').html("<p>" + player2.name + "</p>");

  }


  //Randomly set active player on board load
  $('#player1').removeClass('active');
  $('#player2').removeClass('active');

  if(Math.random() < 0.5) {
    
    $('#player1').addClass('active');

  } else {

    $('#player2').addClass('active');

  }

  //Hover event handler: functions that fire on mouse on and on mouse off
  $('li.box').hover(function() {

    //HOVER BACKGROUND COLOR SHOULD BE GREY, NOT THE COLOR OF THE ACTIVE PLAYER
    // $('li.box').css('opacity', '1');
      //Display active class player's symbol with a lower opacity while mouse is over
            //$(this).animate();


    //Check for which player hasClass active AND if square is enabled (not disabled)
    if($('#player1').hasClass('active')){

      if(!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')){

        $(this).addClass('box-filled-1');

      }
    }

    if($('#player2').hasClass('active')){

      if(!$(this).hasClass('box-filled-1') && !$(this).hasClass('box-filled-2')){

        $(this).addClass('box-filled-2');

      }
    }
  },

    function() {
      
      $(this).removeClass('box-filled-1').removeClass('box-filled-2');

    }
  );

  //Fill a square with the active player's symbol on click
    //Square is then disabled for the remainder of the game
  $('li.box').click(function() {
    
    var activePlayer = "";

    if($('#player1').hasClass('active')){

      if(!$(this).hasClass('box-filled-2')){
    
        $(this).addClass('box-filled-1');

        $('#player2').addClass('active');
        $('#player1').removeClass('active'); //Make this part of a prototype somehow (isActive?)

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

//Checks all variations of game for possible winning or tying combinations 
  //and returns function to display proper end game screen
function isGameWon(activePlayer) {

  //Check if game has ended in a tie, and if so, display the appropriate finish screen
  if(($('.boxes').children().eq(0).hasClass('box-filled-1') || $('.boxes').children().eq(0).hasClass('box-filled-2')) 
    && ($('.boxes').children().eq(1).hasClass('box-filled-1') || $('.boxes').children().eq(1).hasClass('box-filled-2')) 
    && ($('.boxes').children().eq(2).hasClass('box-filled-1') || $('.boxes').children().eq(2).hasClass('box-filled-2')) 
    && ($('.boxes').children().eq(3).hasClass('box-filled-1') || $('.boxes').children().eq(3).hasClass('box-filled-2')) 
    && ($('.boxes').children().eq(4).hasClass('box-filled-1') || $('.boxes').children().eq(4).hasClass('box-filled-2')) 
    && ($('.boxes').children().eq(5).hasClass('box-filled-1') || $('.boxes').children().eq(5).hasClass('box-filled-2')) 
    && ($('.boxes').children().eq(6).hasClass('box-filled-1') || $('.boxes').children().eq(6).hasClass('box-filled-2')) 
    && ($('.boxes').children().eq(7).hasClass('box-filled-1') || $('.boxes').children().eq(7).hasClass('box-filled-2')) 
    && ($('.boxes').children().eq(8).hasClass('box-filled-1') || $('.boxes').children().eq(8).hasClass('box-filled-2'))){

      return displayFinish();

  }

  for(var i = 0; i < $('.boxes').children().length; i++){
    
    if($('.boxes').children().eq(i).hasClass('box-filled-1') || $('.boxes').children().eq(i).hasClass('box-filled-2')){
      
      //Check if row 1 is a winner [0,1,2]
      if(($('.boxes').children().eq(0).hasClass('box-filled-1') && $('.boxes').children().eq(1).hasClass('box-filled-1') && $('.boxes').children().eq(2).hasClass('box-filled-1')) || 
         ($('.boxes').children().eq(0).hasClass('box-filled-2') && $('.boxes').children().eq(1).hasClass('box-filled-2') && $('.boxes').children().eq(2).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
            return displayFinish(activePlayer);
        }

      //Check if row 2 is a winner [3,4,5]
      if(($('.boxes').children().eq(3).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(5).hasClass('box-filled-1')) || 
         ($('.boxes').children().eq(3).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(5).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
            return displayFinish(activePlayer);
        }
      }

      //Check if row 3 is a winner [6,7,8]
      if(($('.boxes').children().eq(6).hasClass('box-filled-1') && $('.boxes').children().eq(7).hasClass('box-filled-1') && $('.boxes').children().eq(8).hasClass('box-filled-1')) || 
         ($('.boxes').children().eq(6).hasClass('box-filled-2') && $('.boxes').children().eq(7).hasClass('box-filled-2') && $('.boxes').children().eq(8).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
            return displayFinish(activePlayer);

      }

      //Check if column 1 is a winner [0,3,6]
      if(($('.boxes').children().eq(0).hasClass('box-filled-1') && $('.boxes').children().eq(3).hasClass('box-filled-1') && $('.boxes').children().eq(6).hasClass('box-filled-1')) || 
         ($('.boxes').children().eq(0).hasClass('box-filled-2') && $('.boxes').children().eq(3).hasClass('box-filled-2') && $('.boxes').children().eq(6).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
            return displayFinish(activePlayer);
      }

      //Check if column 2 is a winner [1,4,7]
      if(($('.boxes').children().eq(1).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(7).hasClass('box-filled-1')) || 
         ($('.boxes').children().eq(1).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(7).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
            return displayFinish(activePlayer);
      }

      //Check if column 3 is a winner [2,5,8]
      if(($('.boxes').children().eq(2).hasClass('box-filled-1') && $('.boxes').children().eq(5).hasClass('box-filled-1') && $('.boxes').children().eq(8).hasClass('box-filled-1')) || 
         ($('.boxes').children().eq(2).hasClass('box-filled-2') && $('.boxes').children().eq(5).hasClass('box-filled-2') && $('.boxes').children().eq(8).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
            return displayFinish(activePlayer);
      }

      //Check if diagonal 1 is a winner [0,4,8]
      if(($('.boxes').children().eq(0).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(8).hasClass('box-filled-1')) || 
         ($('.boxes').children().eq(0).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(8).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
            return displayFinish(activePlayer);
      }

      //Check if diagonal 2 is a winner [2,4,6]
      if(($('.boxes').children().eq(2).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(6).hasClass('box-filled-1')) || 
         ($('.boxes').children().eq(2).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(6).hasClass('box-filled-2'))){
            //Show win screen with activePlayer, player who just clicked, as winner
            return displayFinish(activePlayer);
      }
    }
}

//With the argument of the winning player, the appropriate board is displayed at the game's conclusion
function displayFinish(winningPlayer){

  $('div#board').hide();  
  $('div#finish').show();

  //Reset finish board
  $('#finish').removeClass('screen-win-one').removeClass('screen-win-two').removeClass('screen-win-tie');

  //Display board after which the winningPlayer is player 1
  if(winningPlayer === player1.name){
    
    $('#finish').addClass('screen-win-one');
    $('.message').html("Winner");

  }

  //Display board after which the winningPlayer is player 2
  if(winningPlayer === player2.name){

    $('#finish').addClass('screen-win-two');
    $('.message').html("Winner");

  }

  //Display board after which the game has ended in a tie
  if(winningPlayer !== player1.name && winningPlayer !== player2.name){
  
    $('#finish').addClass('screen-win-tie');
    $('.message').html("It's a Tie!");

  }
}