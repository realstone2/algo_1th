/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = (board) => {
  // 행 검사
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      for (let k = j + 1; k < 9; k++) {
        if (board[i][j] !== '.' && board[i][j] === board[i][k]) {
          return false;
        }
      }
    }
  }

  // 열 검사
  for (let j = 0; j < 9; j++) {
    for (let i = 0; i < 9; i++) {
      for (let k = i + 1; k < 9; k++) {
        if (board[i][j] !== '.' && board[i][j] === board[k][j]) {
          return false;
        }
      }
    }
  }

  // 3x3 박스 검사
  for (let boxRow = 0; boxRow < 3; boxRow++) {
    for (let boxCol = 0; boxCol < 3; boxCol++) {
      const seen = [];
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          const r = boxRow * 3 + i;
          const c = boxCol * 3 + j;
          const val = board[r][c];
          if (val !== '.') {
            if (seen.includes(val)) return false;
            seen.push(val);
          }
        }
      }
    }
  }

  return true;
};