//Contain object oriented code within an anonymous self-executing function to run a tic-tac-toe game
(function(){

	var gameUI = {

	  	init: function(){
	  			  		
		  	//Hide non-start screens	
		  	$('div#finish').hide();
		    $('div#board').hide();
		  	$('div#start').show();

		  	$('.button').click(function() {
	        
		        //Refresh board
		        $('li.box').css('background-color', '#efefef').removeClass('box-filled-1').removeClass('box-filled-2');
		        
		        $('div#start').hide();
		        $('div#finish').hide();
		        $('div#board').show();


	
				function Player(name, isActivePlayer) {
	  
					this.name = name;
					this.isActivePlayer = false;
					
					this.getNames = function(){

						if(player1){
							
							this.name = prompt("Enter player 1's name") || "o";

							//set player1 box text to player1.name
							if(this.name !== "o"){
				    
						    	//Hide SVG and show HTML of non-symbol name
						    	$('#player1 svg').hide();
						    	$('#player1').html("<p>" + this.name + "</p>");
							
							} 
						
							if (player2){
							
								this.name = prompt("Enter player 2's name") || "x";
								
								//set player2 box text to player2.name
								if(this.name && (this.name !== "x")){
					    
							    	//Hide SVG and show HTML of non-symbol name
							    	$('#player2 svg').hide();
							    	$('#player2').html("<p>" + this.name + "</p>");
								
								}		
							}
						}
					}	

					this.getFillClassName = function(){

						if(this === player1){
							this.fillClassName = "box-filled-1";
						} else {
							this.fillClassName = "box-filled-2";
						}

					}

				}

		// this.move = function(){
		//   //Fill clicked square with player symbol and unbind the same square from any and all handlers
		//   	if($('#player1')){
		// 		Player.fillClassName = 'box-filled-1';
		// 	} else {
		// 		Player.fillClassName = 'box-filled-2';
		// 	}

		// };

				function setActivePlayer(){
					
					//Randomly set active player on board load
			    	$('#player1').removeClass('active');
			    	$('#player2').removeClass('active');
			    	player1.isActivePlayer = false;
			    	player2.isActivePlayer = false;


				    if(Math.random() < 0.5) {
				    
				    	$('#player1').addClass('active');
				    	player1.isActivePlayer = true;

				    } else {

				    	$('#player2').addClass('active');
				    	player2.isActivePlayer = false;

				    }
				}

				var player1 = new Player("o", false);
				var player2 = new Player("x", false);

				player1.getNames();
				
				player1.getFillClassName();
				player2.getFillClassName();

				setActivePlayer();

				gameUI.hoverBinder();
				gameUI.moveBinder();

	   	 	})
  		},

  		hoverBinder: function(){
  			//Hover event handler: functions that fire on mouse on and on mouse off
			$('li.box').hover(function() {

			    //Hover background color is grey prior to click
			    $(this).css('background-color', '#efefef');

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

  		},

  		moveBinder: function(){
  			//Fill a square with the active player's symbol on click. Square is disabled for the remainder of the game.
			$('li.box').click(function() {
			    
			    var activePlayer = "";  

			    if($('#player1').hasClass('active')){

			    	if(!$(this).hasClass('box-filled-2')){
			    
			      		$(this).addClass('box-filled-1');
				        $(this).css('background-color', '#FFA000');
				        $('#player2').addClass('active');
				        $('#player1').removeClass('active');

			        	activePlayer = player1.name;

				        $(this).off('mouseenter mouseleave');
				        $(this).off('click');
				        
				        return isGameWon(activePlayer); //THIS SHOULD CHANGE FOR GAMEUI PROTOTYPE
			      	}
			    }

			    if($('#player2').hasClass('active')){
			      
			    	if(!$(this).hasClass('box-filled-1')){
			        
				        $(this).addClass('box-filled-2');
				        $(this).css('background-color', '#3688C3'); 
				        $('#player1').addClass('active');
				        $('#player2').removeClass('active');

			        	activePlayer = player2.name;

				        //Unbind hover event handler from 'this' box
				        $(this).off('mouseenter mouseleave');
				        $(this).off('click');
				        
				        return isGameWon(activePlayer);
			      	}
			    }
			    
			    function isGameWon(activePlayer){

					for(var i = 0; i < $('.boxes').children().length; i++){
    
					    if($('.boxes').children().eq(i).hasClass('box-filled-1') || $('.boxes').children().eq(i).hasClass('box-filled-2')){
					      
						    //Check if row 1 is a winner [0,1,2]
						    if(($('.boxes').children().eq(0).hasClass('box-filled-1') && $('.boxes').children().eq(1).hasClass('box-filled-1') && $('.boxes').children().eq(2).hasClass('box-filled-1')) || 
						       ($('.boxes').children().eq(0).hasClass('box-filled-2') && $('.boxes').children().eq(1).hasClass('box-filled-2') && $('.boxes').children().eq(2).hasClass('box-filled-2'))){
						        	//Show win screen with activePlayer, player who just clicked, as winner
						            return gameUI.displayFinish(activePlayer);
						    }

					        //Check if row 2 is a winner [3,4,5]
					        if(($('.boxes').children().eq(3).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(5).hasClass('box-filled-1')) || 
					           ($('.boxes').children().eq(3).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(5).hasClass('box-filled-2'))){
					        		//Show win screen with activePlayer, player who just clicked, as winner
					            	return gameUI.displayFinish(activePlayer);
					        }
					    }

					    //Check if row 3 is a winner [6,7,8]
					    if(($('.boxes').children().eq(6).hasClass('box-filled-1') && $('.boxes').children().eq(7).hasClass('box-filled-1') && $('.boxes').children().eq(8).hasClass('box-filled-1')) || 
					       ($('.boxes').children().eq(6).hasClass('box-filled-2') && $('.boxes').children().eq(7).hasClass('box-filled-2') && $('.boxes').children().eq(8).hasClass('box-filled-2'))){
					        	//Show win screen with activePlayer, player who just clicked, as winner
					            return gameUI.displayFinish(activePlayer);

					    }

					    //Check if column 1 is a winner [0,3,6]
					    if(($('.boxes').children().eq(0).hasClass('box-filled-1') && $('.boxes').children().eq(3).hasClass('box-filled-1') && $('.boxes').children().eq(6).hasClass('box-filled-1')) || 
					       ($('.boxes').children().eq(0).hasClass('box-filled-2') && $('.boxes').children().eq(3).hasClass('box-filled-2') && $('.boxes').children().eq(6).hasClass('box-filled-2'))){
					        	//Show win screen with activePlayer, player who just clicked, as winner
					            return gameUI.displayFinish(activePlayer);
					    }

					    //Check if column 2 is a winner [1,4,7]
					    if(($('.boxes').children().eq(1).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(7).hasClass('box-filled-1')) || 
					       ($('.boxes').children().eq(1).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(7).hasClass('box-filled-2'))){
					        	//Show win screen with activePlayer, player who just clicked, as winner
					            return gameUI.displayFinish(activePlayer);
					    }

					    //Check if column 3 is a winner [2,5,8]
					    if(($('.boxes').children().eq(2).hasClass('box-filled-1') && $('.boxes').children().eq(5).hasClass('box-filled-1') && $('.boxes').children().eq(8).hasClass('box-filled-1')) || 
					       ($('.boxes').children().eq(2).hasClass('box-filled-2') && $('.boxes').children().eq(5).hasClass('box-filled-2') && $('.boxes').children().eq(8).hasClass('box-filled-2'))){
					        	//Show win screen with activePlayer, player who just clicked, as winner
					            return gameUI.displayFinish(activePlayer);
					    }

					    //Check if diagonal 1 is a winner [0,4,8]
					    if(($('.boxes').children().eq(0).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(8).hasClass('box-filled-1')) || 
					       ($('.boxes').children().eq(0).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(8).hasClass('box-filled-2'))){
					        	//Show win screen with activePlayer, player who just clicked, as winner
					            return gameUI.displayFinish(activePlayer);
					    }

					    //Check if diagonal 2 is a winner [2,4,6]
					    if(($('.boxes').children().eq(2).hasClass('box-filled-1') && $('.boxes').children().eq(4).hasClass('box-filled-1') && $('.boxes').children().eq(6).hasClass('box-filled-1')) || 
					       ($('.boxes').children().eq(2).hasClass('box-filled-2') && $('.boxes').children().eq(4).hasClass('box-filled-2') && $('.boxes').children().eq(6).hasClass('box-filled-2'))){
					        	//Show win screen with activePlayer, player who just clicked, as winner
					            return gameUI.displayFinish(activePlayer);
					    }
					    
					    //Check if game has ended in a tie, and if so, display the appropriate finish screen
					    if(    ($('.boxes').children().eq(0).hasClass('box-filled-1') || $('.boxes').children().eq(0).hasClass('box-filled-2')) 
					    	&& ($('.boxes').children().eq(1).hasClass('box-filled-1') || $('.boxes').children().eq(1).hasClass('box-filled-2')) 
					        && ($('.boxes').children().eq(2).hasClass('box-filled-1') || $('.boxes').children().eq(2).hasClass('box-filled-2')) 
					        && ($('.boxes').children().eq(3).hasClass('box-filled-1') || $('.boxes').children().eq(3).hasClass('box-filled-2')) 
					        && ($('.boxes').children().eq(4).hasClass('box-filled-1') || $('.boxes').children().eq(4).hasClass('box-filled-2')) 
					        && ($('.boxes').children().eq(5).hasClass('box-filled-1') || $('.boxes').children().eq(5).hasClass('box-filled-2')) 
					        && ($('.boxes').children().eq(6).hasClass('box-filled-1') || $('.boxes').children().eq(6).hasClass('box-filled-2')) 
					        && ($('.boxes').children().eq(7).hasClass('box-filled-1') || $('.boxes').children().eq(7).hasClass('box-filled-2')) 
					        && ($('.boxes').children().eq(8).hasClass('box-filled-1') || $('.boxes').children().eq(8).hasClass('box-filled-2'))){

					          return gameUI.displayFinish();
					    }
					}
				}
			});

  	    },

  	  	displayFinish: function(winningPlayer){
  	  		
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
	}

	gameUI.init();

})();




//     boxfiller: function() {
//       //return active player's box fill class, e.g. box-filled-1
//       if(player.name).hasClass('active'){
//         return player.name;
//       }

//     },

//     bindEvents: function() { //bind hover and click separately to manage the background color differences?
//       this.box.on('hover', 'click', this.showMove);
//     },

//     showMove: function() {
//       //Show square with particular opacity depending on hover or click
//       if($(this).boxfiller() === "#player1" //Access box-fill-1 by way of #player1
//       this.box.addClass();

//     },

//     newGame: function() { // init game by applying all reset functionality, displaying #board, etc.

//     },

//     var winCombinations = [ //What the hell is this?

//       //Horizontal wins
//       [0,1,2], [3,4,5], [6,7,8],

//       //Vertical wins
//       [0,3,6], [1,4,7], [2,5,8],

//       //Diagonal wins
//       [0,4,8], [2,4,6]

//       ];


//   }

// })();






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


// // //Instantiate player prototypes to bind click handlers for hover and for click effects on box.li
// //   //Bind function within the anonymous function of the player
// // Player.prototype.clickHandler = function(){}

// // Player.prototype.hoverHandler = function(){}