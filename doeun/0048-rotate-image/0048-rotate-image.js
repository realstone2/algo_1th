/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 느낌상 노가다는 아님 규칙이 있음(몰라서 찾아봄)

// 원본
// (0,0) (0,1) (0,2)
// (1,0) (1,1) (1,2)
// (2,0) (2,1) (2,2)

// 90도 시계방향 회전
// (2,0) (1,0) (0,0)
// (2,1) (1,1) (0,1)
// (2,2) (1,2) (0,2)

// 원본: (i, j) → 회전 후: (j, n-1-i)

const rotate = function (matrix) {
  const n = matrix.length;

  // 1. 대각선 기준으로 뒤집기 (전치)
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
    }
  }

  // 2. 각 행을 뒤집기
  for (let i = 0; i < n; i++) {
    matrix[i].reverse();
  }
};
