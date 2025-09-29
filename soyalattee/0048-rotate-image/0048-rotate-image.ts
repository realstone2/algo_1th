/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
   
  const n = matrix.length;

  // 서로 바꾸기
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 각 row를 뒤집는다
  for (let row of matrix) {
    row.reverse();
  }

};