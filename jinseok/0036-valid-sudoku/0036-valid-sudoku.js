/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
  const subBoxStartIndexSet = new Set([0, 3, 6]);
  for (let row = 0; row < board.length; row++) {
    const rowBoardSet = new Set();
    const colBoardSet = new Set();
    for (let col = 0; col < board.length; col++) {
      const rowCurrent = board[row][col];
      if (rowCurrent !== '.') {
        if (rowBoardSet.has(rowCurrent)) {
          return false;
        } else {
          rowBoardSet.add(rowCurrent);
        }
      }

      const colCurrent = board[col][row];
      if (colCurrent !== '.') {
        if (colBoardSet.has(colCurrent)) {
          return false;
        } else {
          colBoardSet.add(colCurrent);
        }
      }
      const isSubBoxStart = subBoxStartIndexSet.has(col) && subBoxStartIndexSet.has(row);


      if (isSubBoxStart) {
        const subBoxSet = new Set();

        for (let subRow = row; subRow < row + 3; subRow++) {
          for (let subCol = col; subCol < col + 3; subCol++) {
            const subCurrent = board[subRow][subCol]
            if (subCurrent !== '.') {
              if (subBoxSet.has(subCurrent)) {
                return false;
              } else {
                subBoxSet.add(subCurrent);
              }
            }
          }
        }
      }
    }
  }
  return true;
};
