class Board{
    constructor(){}

    createBoard(){
        const board = document.createElement("div");
        board.setAttribute("id","board");
        document.body.append(board);
        for(let i = 0; i<8; i++){
            let tmp = new Row();
            tmp.createRow();
        }
        for(let i = 0; i<8; i++){
            for(let j = 0; j<8; j++){
                let tmp = new Tile(i+1,j+1);
                tmp.createTile();
            }
        }
    }
}

class Row extends Board{
    static rowCounter = 0;
    constructor(){
        super();
        Row.rowCounter += 1;
    }

    createRow(){
        const row = document.createElement("div");
        row.setAttribute("id",`row${Row.rowCounter}`);
        row.setAttribute("class","row");
        document.getElementById('board').appendChild(row);
    }
}

class Tile extends Row{
    static numberOfTiles = 0;
    static tmp = 1;

    constructor(x,y){
        super();
        Tile.numberOfTiles += 1;
        this.x=x;
        this.y=y;
    }
    
    createTile(){
        const tile = document.createElement("div");
        tile.setAttribute("id",`tile${this.x}${this.y}`);

        var q = Tile.numberOfTiles;
        var color;
        if(this.x%2==0){
            if(this.y%2 == 0){
                color = 'W';
            }
            else{
                color = 'B';
            }
        }
        else{
            if(this.y%2 == 0){
                color = 'B';
            }
            else{
                color = 'W';
            }
        }

        if(q % 2 == 0){
            tile.setAttribute("class",`tile${color}`);
        }
        else{
            tile.setAttribute("class",`tile${color}`);
        }

        document.getElementById(`row${Tile.tmp}`).appendChild(tile);
        if(Tile.numberOfTiles%8==0){
            Tile.tmp = Tile.tmp +1;
        }
    }
}
class Figure extends Tile{
    constructor(){
        super();
    }

    move(){
    }

}
class Pawn extends Figure {
    static blackPawnCounter = 0;
    static whitePawnCounter = 0;
    constructor(x,y,color){
        super();
        this.x=x;
        this.y=y;
        if(this.color == 'black'){
            Pawn.blackPawnCounter = Pawn.blackPawnCounter + 1;
        }
        if(this.color == 'white'){
            Pawn.whitePawnCounter = Pawn.whitePawnCounter + 1;
        }
        this.move();
    }

    createPawn(x,y,color){
        const pawn = document.createElement('p');
        pawn.setAttribute("class","pawn");
        if(color=='white'){
            pawn.setAttribute("id",`${color}_pawn${Pawn.whitePawnCounter}`);
            pawn.innerText = '♙'
        }
        if(color=='black'){
            pawn.setAttribute("id",`${color}_pawn${Pawn.blackPawnCounter}`);
            pawn.innerText = '♟'
        }
        document.getElementById(`tile${x}${y}`).appendChild(pawn);
    }

    move(){
    }
}

class Knight extends Figure{
    static blackKnightCounter = 0;
    static whiteKnightCounter = 0;
    constructor(x,y,color){
        super();
        this.x=x;
        this.y=y;
        if(this.color == 'black'){
            Knight.blackKnightCounter = Knight.blackKnightCounter + 1;
        }
        if(this.color == 'white'){
            Knight.whiteKnightCounter = Knight.whiteKnightCounter + 1;
        }
    }

    createKnight(x,y,color){
        const knight = document.createElement('p');
        knight.setAttribute("class","knight");
        if(color=='white'){
            knight.setAttribute("id",`${color}_knight${Knight.whiteKnightCounter}`);
            knight.innerText = '♘'
        }
        if(color=='black'){
            knight.setAttribute("id",`${color}_knight${Knight.blackKnightCounter}`);
            knight.innerText = '♞'
        }
        document.getElementById(`tile${x}${y}`).appendChild(knight);
    }
}

class Bishop extends Figure{
    static blackBishopCounter = 0;
    static whiteBishopCounter = 0;
    constructor(x,y,color){
        super();
        this.x=x;
        this.y=y;
        if(this.color == 'black'){
            Bishop.blackBishopCounter = Bishop.blackBishopCounter + 1;
        }
        if(this.color == 'white'){
            Bishop.whiteBishopCounter = Bishop.whiteBishopCounter + 1;
        }
    }

    createBishop(x,y,color){
        const Bishop = document.createElement('p');
        Bishop.setAttribute("class","Bishop");
        if(color=='white'){
            Bishop.setAttribute("id",`${color}_Bishop${Bishop.whiteBishopCounter}`);
            Bishop.innerText = '♗'
        }
        if(color=='black'){
            Bishop.setAttribute("id",`${color}_Bishop${Bishop.blackBishopCounter}`);
            Bishop.innerText = '♝'
        }
        document.getElementById(`tile${x}${y}`).appendChild(Bishop);
    }
}

class Rook extends Figure{
    static blackRookCounter = 0;
    static whiteRookCounter = 0;
    constructor(x,y,color){
        super();
        this.x=x;
        this.y=y;
        if(this.color == 'black'){
            Rook.blackRookCounter = Rook.blackRookCounter + 1;
        }
        if(this.color == 'white'){
            Rook.whiteRookCounter = Rook.whiteRookCounter + 1;
        }
    }

    createRook(x,y,color){
        const Rook = document.createElement('p');
        Rook.setAttribute("class","Rook");
        if(color=='white'){
            Rook.setAttribute("id",`${color}_Rook${Rook.whiteRookCounter}`);
            Rook.innerText = '♖'
        }
        if(color=='black'){
            Rook.setAttribute("id",`${color}_Rook${Rook.blackRookCounter}`);
            Rook.innerText = '♜'
        }
        document.getElementById(`tile${x}${y}`).appendChild(Rook);
    }
}

class Queen extends Figure{
    static blackQueenCounter = 0;
    static whiteQueenCounter = 0;
    constructor(x,y,color){
        super();
        this.x=x;
        this.y=y;
        if(this.color == 'black'){
            Queen.blackQueenCounter = Queen.blackQueenCounter + 1;
        }
        if(this.color == 'white'){
            Queen.whiteQueenCounter = Queen.whiteQueenCounter + 1;
        }
    }

    createQueen(x,y,color){
        const Queen = document.createElement('p');
        Queen.setAttribute("class","Queen");
        if(color=='white'){
            Queen.setAttribute("id",`${color}_Queen${Queen.whiteQueenCounter}`);
            Queen.innerText = '♕'
        }
        if(color=='black'){
            Queen.setAttribute("id",`${color}_Queen${Queen.blackQueenCounter}`);
            Queen.innerText = '♛'
        }
        document.getElementById(`tile${x}${y}`).appendChild(Queen);
    }
}

class King extends Figure{
    static blackKingCounter = 0;
    static whiteKingCounter = 0;
    constructor(x,y,color){
        super();
        this.x=x;
        this.y=y;
        if(this.color == 'black'){
            King.blackKingCounter = King.blackKingCounter + 1;
        }
        if(this.color == 'white'){
            King.whiteKingCounter = King.whiteKingCounter + 1;
        }
    }

    createKing(x,y,color){
        const King = document.createElement('p');
        King.setAttribute("class","King");
        if(color=='white'){
            King.setAttribute("id",`${color}_King${King.whiteKingCounter}`);
            King.innerText = '♔'
        }
        if(color=='black'){
            King.setAttribute("id",`${color}_King${King.blackKingCounter}`);
            King.innerText = '♚'
        }
        document.getElementById(`tile${x}${y}`).appendChild(King);
    }
}

class Game extends Board{
    constructor(){
        super();
    }

    setPawns(){
        for(let i=1;i<=8;i++){
            var bp = new Pawn(i,2,'black');
            bp.createPawn(i,2,'black');
            var wp = new Pawn(i,7,'white');
            bp.createPawn(i,7,'white');
        }
        var bk1 = new Knight(2,1,'black');
        var bk2 = new Knight(7,1,'black');
        bk1.createKnight(2,1,'black');
        bk2.createKnight(7,1,'black');
        var wk1 = new Knight(2,8,'white');
        var wk2 = new Knight(7,8,'white');
        wk1.createKnight(2,8,'white');
        wk2.createKnight(7,8,'white');

        var br1 = new Rook(1,1,'black');
        var br2 = new Rook(8,1,'black');
        br1.createRook(1,1,'black');
        br2.createRook(8,1,'black');
        var wr1 = new Rook(1,8,'white');
        var wr2 = new Rook(8,8,'white');
        wr1.createRook(1,8,'white');
        wr2.createRook(8,8,'white');

        var bb1 = new Bishop(3,1,'black');
        var bb2 = new Bishop(6,1,'black');
        bb1.createBishop(3,1,'black');
        bb2.createBishop(6,1,'black');
        var wb1 = new Bishop(3,8,'white');
        var wb2 = new Bishop(6,8,'white');
        wb1.createBishop(3,8,'white');
        wb2.createBishop(6,8,'white');

        var bq = new Queen(4,1,'black');
        bq.createQueen(4,1,'black');
        var wq = new Queen(4,8,'white');
        wq.createQueen(4,8,'white');

        var bkk = new King(5,1,'black');
        bkk.createKing(5,1,'black');
        var wkk = new King(5,8,'white');
        wkk.createKing(5,8,'white');


    }
}

var board = new Board();
board.createBoard();
var game = new Game();
game.setPawns();