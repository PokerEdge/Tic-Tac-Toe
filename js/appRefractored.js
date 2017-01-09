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

    notActive: function() {
      this.isActive = false;
    }

    showMove: function() {
      //Show square with particular opacity depending on hover or click
      this.box.addClass(boxfiller);

    },



  }

  player1 = new Player()
  //Call init twice with prompt new name
  Player.init();

})();