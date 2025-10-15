/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const isDuplicated = (values) => {
        const hashMap = {};
        for (const value of values) {
            if (value !== '.') {
                if (hashMap[value]) return true;
                hashMap[value] = 1;
            }
        }
        return false
    }
    // 가로 1줄씩 중복되는 숫자가 있는지 확인!
    // 세로 1줄씩 중복되는 숫자가 있는지 확인!
    // 3x3 박스내에 중복되는 숫자가 있는지 확인!

    // 가로 검사
    for (let i = 0; i < 9; i++) {
        if (isDuplicated(board[i])) return false;
    }

    // 세로 검사
    for (let i = 0; i < 9; i++) {
        const array = [];
        for (let j = 0; j < 9; j++) {
            array.push(board[j][i])
        }
        if (isDuplicated(array)) return false
    }

    // 3x3 검사
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const array = [];
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    array.push(board[i * 3 + r][j * 3 + c]);
                }
            }
            if (isDuplicated(array)) return false;
        }
    }
    return true
};