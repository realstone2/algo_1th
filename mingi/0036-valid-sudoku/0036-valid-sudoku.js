/**
 * @param {character[][]} board
 * @return {boolean}
 */

const isValidSudoku = function(board) {
    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const num = board[r][c];

            if (num === '.') {
                continue;
            }

            if (!isValid(board, r, c, num)) {
                return false;
            }
        }
    }
    
    return true;
};

function isValid(board, row, col, number) {
    board[row][col] = '.';

    for (let c = 0; c < 9; c++) {
        if (board[row][c] === number) {
            board[row][col] = number; 
            return false;
        }
    }

    for (let r = 0; r < 9; r++) {
        if (board[r][col] === number) {
            board[row][col] = number; 
            return false;
        }
    }

    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let r = 0; r < 3; r++) {
        for (let c = 0; c < 3; c++) {
            if (board[startRow + r][startCol + c] === number) {
                board[row][col] = number; 
                return false;
            }
        }
    }

    board[row][col] = number;
    return true;
}