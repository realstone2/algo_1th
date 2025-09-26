/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    // 행에 중복 없는지 확인
    for(let i = 0; i < board.length; i++) {
        const rowSet = new Set();
        for(let j = 0; j < board.length; j++){
            if(rowSet.has(board[i][j]) && board[i][j] !== ".") return false;
            rowSet.add(board[i][j]);
        }
    }
    // 열에 중복 없는지 확인
    for(let i = 0; i < board.length; i++) {
        const colSet = new Set();
        for(let j = 0; j < board.length; j++){
            if(colSet.has(board[j][i]) && board[j][i] !== ".") return false;
            colSet.add(board[j][i]);
        }
    }
    for(let i = 0; i < 9; i++) {
        const startRow = Math.floor(i / 3) * 3; // 몫 * 3
        const startCol = i % 3 * 3; // 나머지 * 3
        const boxSet = new Set();
        for(let j = 0; j < 3; j++) {
            for (let k = 0; k < 3; k++) {
                const row = startRow + j
                const col = startCol + k
                if(boxSet.has(board[row][col]) && board[row][col] !== ".") {
                    return false;
                } 
                boxSet.add(board[row][col]);
            }
        }
    }
    return true
};