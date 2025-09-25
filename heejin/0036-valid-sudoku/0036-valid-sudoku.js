/**
 * @param {character[][]} board
 * @return {boolean}
 */
 
 // 세 개의 배열을 사용하여 행, 열, 3x3 박스 내의 숫자 중복을 확인
const isValidSudoku = (board) => {
    const rows = Array.from({ length: 9 }, () => Array(10).fill(false));
    const cols = Array.from({ length: 9 }, () => Array(10).fill(false));
    const boxes = Array.from({ length: 9 }, () => Array(10).fill(false));

    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            const char = board[i][j];

            if (char === '.') {
                continue;
            }

            const num = parseInt(char);
            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

            if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
                return false;
            }

            rows[i][num] = true;
            cols[j][num] = true;
            boxes[boxIndex][num] = true;
        }
    }

    return true;
};