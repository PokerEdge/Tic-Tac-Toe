(function(){

	//Constructor function for a tic-tac-toe Player
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

	// }

	// Player.prototype.initPlayer1 = function(){
	// 	this.name = prompt("Enter player 1's name") || "o";
	// 	this.fillClassName = "box-filled-1";
	// 	//set player1 box text to player1.name
	// 	if(player1.name && (player1.name !== "x")){
	    
	//     	//Hide SVG and show HTML of non-symbol name
	//     	$('#player1 svg').hide();
	//     	$('#player1').html("<p>" + player1.name + "</p>");

	//     }

	// };

	// Player.prototype.initPlayer2 = function(){
	// 	this.name = prompt("Enter player 2's name") || "x";
	// 	this.fillClassName = "box-filled-2";
		
	// 	if(player2.name && (player2.name !== "x")){
	    
	//     	//Hide SVG and show text of non-symbol name
	//     	$('#player2 svg').hide();
	//     	$('#player2').html("<p>" + player2.name + "</p>");

	//     }
	// };

	// Player.prototype.setActivePlayer = function(){

	//     //Randomly set active player on board load
	//     $('#player1').removeClass('active');
	//     $('#player2').removeClass('active');
	//     player1.isActivePlayer = false;
	//     player2.isActivePlayer = false;


	//     if(Math.random() < 0.5) {
	    
	//     	$('#player1').addClass('active');
	//     	player1.isActivePlayer = true;

	//     } else {

	//     	$('#player2').addClass('active');
	//     	player2.isActivePlayer = false;

	//     }
	// };

	// var player1Name = prompt("Enter player 1's name") || "o";
 //    var player2Name = prompt("Enter player 2's name") || "x";

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

	gameUI.init();

	player1.getNames();
	player1.getFillClassName();
	player2.getFillClassName();

	setActivePlayer();



	// Player.initPlayer1();
	// Player.initPlayer2();
	// Player.setActivePlayer();

})();
      

// var player1Name = prompt("Enter player 1's name") || "o";
// var player2Name = prompt("Enter player 2's name") || "x";

// player1 = new Player(player1Name);
// player2 = new Player(player2Name);      

      // this.name = name;
      // this.symbol = symbol;
      // this.box = $('li.box');
      // this.boxfiller();
      // this.bindEvents();
      // this.squares;


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