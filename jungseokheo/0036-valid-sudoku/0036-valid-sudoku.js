/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function(board) {
    
    const rows = Array(9).fill(null).map(() => new Set());
    const cols = Array(9).fill(null).map(() => new Set());
    const boxes = Array(9).fill(null).map(() => new Set());
    
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const cell = board[i][j];
            if (cell === '.') continue;
            
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
            const num = parseInt(cell);
            
            // 중복 검사
            if (rows[i].has(num) || cols[j].has(num) || boxes[boxIndex].has(num)) {
                return false;
            }
            
            // 추가하기
            rows[i].add(num);
            cols[j].add(num);
            boxes[boxIndex].add(num);

        }
    }
    
    return true;
};