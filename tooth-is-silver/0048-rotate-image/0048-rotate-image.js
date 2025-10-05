/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
    // 3x3의 경우
    // (인덱스 기준) [0,0] => [0,2], [0,1] => [1,2], [0,2] => [2,2]
    // [1,0] => [0,1] [1,1] => [1,1] [1,2] => [2,1]
    // [2,0] => [0,0] [2,1] => [1,0] [2,2] => [2,1]
    // 뒤 인덱스는 2, 1, 0으로 줄어듬
    // 앞 인덱스는 0,1,2,3으로 늘어남
    
    // 4x4 기준
    // [0,0] => [0,3] [0,1] => [1,3] [0,2] => [2,3] [0,3] => [3,3]
    // [1,0] => [0,2] [1,1] => [1,2] [1,2] => [2,2] [1,3] => [3,2]
    // [2,0] => [0,1] [2,1] => [1,1] [2,2] => [2,1] [2,3] => [3,1]
    // [3,0] => [0,0] [3,1] => [1,0] [3,2] => [2,0] [3,3] => [3,0]
    // 뒤 인덱스는 3부터 하나씩 줄어듦
    // 앞인덱스는 0, 1, 2, 3으로 늘어남

    // let idx = 0;
    // for (let i = matrix.length - 1; i >= 0; i--){
    //     for (let j = 0; j < matrix.length; j++) {
    //         // j는 0,1,2로늘어나므로 넣을 배열 앞 인덱스로 사용
    //         // idx는 0,1,2로 늘어나므로 기존 배열 앞 인덱스로 사용
    //         // [idx, j]는 기존 배열
    //         // [j, i]는 넣을 배열
    //         const prev = matrix[idx][j]
    //         const next = matrix[j][i]
    //         matrix[idx][j] = next;
    //         matrix[j][i] = prev
    //         console.log('기존 배열::::','[', idx, ',', j, ']')
    //         console.log('바꿀 배열::::','[', j, ',', i, ']')
    //         console.log('--------------')
    //     }
    //     idx++
    // } 위의 방법은 덮어쓰기가 되어서 실패!

    // ai힌트를 받아서 대각선으로 교체후 순서 반대로 출력
    // [0,0] <-> [0,0] [0,1] <-> [1,0] [0,2] <-> [2,0] 123 -> 147 이후 뒤집기 741
    for (let i = 0; i < matrix.length; i++) {
        for (let j = i + 1; j < matrix.length; j++) {
            const temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
    for (let k = 0; k < matrix.length; k++) {
        matrix[k].reverse()
    }
};