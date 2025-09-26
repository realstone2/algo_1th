function isValidSudoku(board: string[][]): boolean {
    //row check
    for(let i = 0 ; i < 9 ; i++){
        const colMap = new Map();
        const rowMap = new Map();
        for(let j = 0 ; j < 9 ; j++){
            if(board[i][j] !== "."){
                if(colMap.has(board[i][j]))return false;
                colMap.set(board[i][j],board[i][j])
            }
            if(board[j][i] !== "."){
                if(rowMap.has(board[j][i]))return false; 
                rowMap.set(board[j][i],board[j][i])
            }
        }
    }

    // 3×3 박스 검사
  for (let br = 0; br < 9; br += 3) {
    for (let bc = 0; bc < 9; bc += 3) {
      const box = new Set<string>();
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {  // ← j 증가
          const v = board[br + i][bc + j];
          if (v !== ".") {
            if (box.has(v)) return false;
            box.add(v);
          }
        }
      }
    }
  }
    return true;
};