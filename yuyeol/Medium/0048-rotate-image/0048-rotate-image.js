/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 
/**
1. 대각선 대칭으로 반전시키기
2. 각 행을 반전시키기
*/
var rotate = function(matrix) {
    // 바꿀 원소를 임시 저장할 변수
    let temp;
    for(let i = 0; i < matrix.length; i++) {
        for(let j = i; j < matrix.length; j++) {
            temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for(let i = 0; i < matrix.length; i++) {
        matrix[i].reverse();
    }
};
