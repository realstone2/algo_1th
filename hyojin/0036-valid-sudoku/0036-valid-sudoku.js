/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    for (let r = 0; r < 9; r++) {
        let set = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[r][i] === '.') continue;
            if (set.has(board[r][i])) return false;
            set.add(board[r][i]);
        }
    }

    for (let c = 0; c < 9; c++) {
        let set = new Set();
        for (let i = 0; i < 9; i++) {
            if (board[i][c] === '.') continue;
            if (set.has(board[i][c])) return false;
            set.add(board[i][c]);
        }
    }

    for (let b = 0; b < 9; b++) {
        let set = new Set();
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                let r = Math.floor(b / 3) * 3 + i;
                let c = (b % 3) * 3 + j;
                if (board[r][c] === '.') continue;
                if (set.has(board[r][c])) return false;
                set.add(board[r][c]);
            }
        }
    }

    return true;
    
};