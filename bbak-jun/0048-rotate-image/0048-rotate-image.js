/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    
    for (let i = 0; i < n; i++) {
        // 대각선 위쪽과 교환하기 위함
        for (let j = i + 1; j < n; j++) {
            // matrix[i][j]와 matrix[j][i] 교환
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    
    // 2단계: 각 행을 좌우 반전
    for (let i = 0; i < n; i++) {
        matrix[i].reverse();
    }
};