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
    // 총 9개의 3*3 박스에 중복 없는지 확인
    /* 
    row: 몫 * 3 col: 나머지 * 3
    * 3을 하는 이유? box가 3*3이라서 순회 간격이 3칸이기 때문. 그래서 박스 단위로 건너뛰려면 *3이 필요.
    12*12에 4*4 박스를 순회하는거였다면 나머지와 몫을 3으로 구하고, 건너뛰기 위해 *4를 했을 것임.
    **/
    for(let i = 0; i < 9; i++) {
        const startRow = Math.floor(i / 3) * 3; 
        const startCol = i % 3 * 3; 
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