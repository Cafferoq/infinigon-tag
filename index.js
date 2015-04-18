var Infinigon = require('infinigon');
var Board = Infinigon.Board;
var Piece = Infinigon.Piece;

var ItPerson = false;


function Tag(){

    var options = {
        size:{
            width: 3000,
            height: 3000
        }
    };
    //until this is called, the pieces and board will render but not move.
    //this.game.start();
    this.game = new Infinigon(options);
    this.game.start();
    this.game.onCollision = this.handleCollision;
}



Infection.prototype.newPlayer = function(id) {
    var options = {
        id: id,
        board: this.game.board,
        position: {
            x: 1500,
            y: 2500
        },
        class: 'human piece'
    };
    var returned = new Piece(options);
    if (!ItPerson){
        ItPerson = true;
        returned.class = "tagged piece";
        returned.setPosition({x:30,y:30});
    }
    return returned;
};

Infection.prototype.removePlayer = function(id){
    this.game.board.pieces[id].deconstruct();
};

Infection.prototype.handleCollision = function(pieceA,pieceB){
    if (pieceA.class.indexOf("tagged")>-1){
        pieceB.class = "tagged piece";
        pieceA.class = "human piece";
    }else if (pieceB.class.indexOf("tagged")>-1){
        pieceA.class = "tagged piece";
        pieceB.class = "human piece";
    }
};


module.exports = Tag;