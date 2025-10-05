/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotateRecursive = (matrix, start, end) => {
    if (start >= end) {
        return;
    }

    for (let offset = 0; offset < (end - start); offset++) {
        
        const top = matrix[start][start + offset];

        const rightCoord = [start + offset, end];
        const bottomCoord = [end, end - offset];
        const leftCoord = [end - offset, start];

        matrix[start][start + offset] = matrix[leftCoord[0]][leftCoord[1]];
        
        matrix[leftCoord[0]][leftCoord[1]] = matrix[bottomCoord[0]][bottomCoord[1]];
        
        matrix[bottomCoord[0]][bottomCoord[1]] = matrix[rightCoord[0]][rightCoord[1]];
        
        matrix[rightCoord[0]][rightCoord[1]] = top;
    }

    rotateRecursive(matrix, start + 1, end - 1);
};


// --- 메인 회전 함수 ---
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    const n = matrix.length;
    
    rotateRecursive(matrix, 0, n - 1);
};
