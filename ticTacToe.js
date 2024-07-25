class TicTacToe {
    constructor (board) {
        this.board = board
    }

    checkWinner () {
        for (let i = 0; i < 4; i++) { 
            // Checking for winner by row and column
            if(this.board[i][0] === this.board[i][1] && this.board[i][1] === this.board[i][2] && this.board[i][2] === this.board[i][3] && this.board[i][0] !== "") {
                return this.board[i][0]
            }
            if(this.board[0][i] === this.board[1][i] && this.board[1][i] === this.board[2][i] && this.board[2][i] === this.board[3][i] && this.board[0][i] !== "") {
                return this.board[0][i]
            }

        }

        // Checking for winner by diagonals
        if(this.board[0][0] === this.board[1][1] && this.board[1][1] === this.board[2][2] && this.board[2][2] === this.board[3][3] && this.board[0][0] !== "") {
            return this.board[0][0]
        }
        if(this.board[0][3] === this.board[1][2] && this.board[1][2] === this.board[2][1] && this.board[2][1] === this.board[3][0] && this.board[0][3] !== "") {
            return this.board[0][3]
        }

        // Checking winner by all four conners
        if(this.board[0][0] === this.board[0][3] && this.board[0][3] === this.board[3][0] && this.board[3][0] === this.board[3][3] && this.board[0][0] !== "") {
            return this.board[0][0]
        }

        // checking for 2x2 Winner
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if(this.board[i][j] ===  this.board[i][j + 1] &&  this.board[i][j + 1] === this.board[i+ 1][j] && this.board[i + 1][j] === this.board[i + 1][j + 1] && this.board[i][j] !== "") {
                    return this.board[i][j]
                }
            }
        }
        return "No Winners yet"
    }
    anyMovesLeft () {
        for (let i = 0; i < 4; i++) {
            const rows = this.board[i];
            for (let j = 0; j < 4; j++) {
                const spaces = rows[j];
                if(spaces === "") {
                    return true
                }
            }            
        }
        return false
    }

    isGameOver () {
        let winner = this.checkWinner()
        let anyMove = this.anyMovesLeft()

        if(winner) {
            return true
        }
        if(!anyMove) {
            return true
        }
        return false
    }

}

module.exports = TicTacToe;