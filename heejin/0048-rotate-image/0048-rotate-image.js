/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = (matrix) => {
    const n = matrix.length;
    
    // 레이어 수만큼 반복
    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        const first = layer;
        const last = n - 1 - layer;
        
        // 각 레이어의 요소들을 회전
        for (let i = first; i < last; i++) {
            const offset = i - first;
            
            const top = matrix[first][i];
            
            // left → top
            matrix[first][i] = matrix[last - offset][first];
            
            // bottom → left
            matrix[last - offset][first] = matrix[last][last - offset];
            
            // right → bottom
            matrix[last][last - offset] = matrix[i][last];
            
            // top → right
            matrix[i][last] = top;
        }
    }
};