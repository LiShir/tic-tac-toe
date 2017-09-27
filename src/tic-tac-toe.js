class TicTacToe {
    constructor() {
        
        this.CurrentPlayerSymbol = 'x';
        this.matrix = new Array();
        for (var i=0; i<3; i++){
            this.matrix[i] = new Array();
            for (var j=0; j<3; j++){
                this.matrix[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.CurrentPlayerSymbol;
            
        }

    

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] !== null){
            return ;
        }
        this.matrix[rowIndex][columnIndex] = this.CurrentPlayerSymbol;
        
     
        if (this.CurrentPlayerSymbol == 'x'){
            this.CurrentPlayerSymbol = 'o';
        }
       else if (this.CurrentPlayerSymbol == 'o') {
            this.CurrentPlayerSymbol = 'x'; 
            }
        
    }

    isFinished() {
        
            return this.getWinner() !== null || this.noMoreTurns() 
    }

    getWinner() {
      
        for (var i=0; i<3; i++) {
            if (this.matrix[i][0] == this.matrix[i][1] && this.matrix[i][1] == this.matrix[i][2]){
                return this.matrix[i][0];
            }
            if (this.matrix[0][i] == this.matrix[1][i] && this.matrix[1][i] == this.matrix[2][i]){
                return this.matrix[0][i];
            }  
        }
        if (this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2]){
            return this.matrix[1][1];
        }
        if (this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0]){
            return this.matrix[1][1];
        }
        
        else {
            return null;}
    }

    noMoreTurns() {
        for (var i=0; i<3; i++){
            for (var j=0; j<3; j++){
                if ( this.matrix[i][j] == null) {return false;}
                
            }
        }
        return true;
    }

    isDraw() {
        if (this.noMoreTurns() == true && this.getWinner() == null){
            return true;
        }
        else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex];

    }
}

module.exports = TicTacToe;
