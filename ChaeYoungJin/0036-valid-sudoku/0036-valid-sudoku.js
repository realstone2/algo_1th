/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    /*
    const vailidateArr = []
    for(let i = 0; i < 3; i++){
        const slicedBoard = board.splice(0, 3)
        const newArr = [ ...slicedBoard ]
        console.log(newArr)

    }
    */

    const rows = Array.from({length: 9}, () => new Set());
    const cols = Array.from({length: 9}, () => new Set());
    const boxes = Array.from({length: 9}, () => new Set());
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const num = board[i][j];
            if (num === '.') continue;
            
            // 박스 인덱스 계산: 0~8
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            
            // 중복 체크
            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }
            
            // 추가
            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);
        }
    }
    
    return true;

    
};