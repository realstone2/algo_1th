// /**
//  * @param {number[][]} matrix
//  * @return {void} Do not return anything, modify matrix in-place instead.
//  */
// var rotate = function(matrix) {
//     let deps = 0;

//     const newPositionMap = new Map();
//     const oldPositionMap = new Map();


//     while(deps <= matrix.length / 2){
//         const start = deps; 
//         const end = matrix.length - deps - 1
//         for(let i = start; i <= end; i ++){
//             for(let j = start; j <= end; j ++){
//                 //row 이동
//                 if(i === start || i === end){
//                     const currentPosition = `${i},${j}`
//                     let currentValue;

//                     if(!oldPositionMap.has(currentPosition)){
//                         oldPositionMap.set(currentPosition, matrix[i][j])
//                         currentValue=matrix[i][j]
//                     }else {
//                         currentValue = oldPositionMap.get(currentPosition)
//                     }

//                     if(i === start && j === start){
//                         const targetPosition = `${i},${j + end}`
//                         let targetValue;

//                         if(!oldPositionMap.has(targetPosition)){
//                             oldPositionMap.set(targetPosition, matrix[i][j + end])
//                             targetValue = matrix[i][j + end]
//                         } else {
//                             targetValue = oldPositionMap.get(targetPosition)
//                         }

//                         if(!newPositionMap.has(targetPosition)){
//                             newPositionMap.set(targetPosition, currentValue)
//                         }


//                     }


//     //row의 규칙은 우측으로 갈 때는 내려가면서 현재 col숫자만큼 row를 더해주면됨
//     //왼쪽으로 갈 때는 0 col col에 있던게 row로 이동
                   


//                     //가장 외부 배열 접근
//                     if(start)


//                 }
                
//                 //col 이동
//                 if(j === start || j === end){

//                 }
//             }
//         }


//         //가장 외부부터 한바퀴씩 돌기
//         deps ++;
//     }

//     // row to clo
//     // [0,0][0,1][0,2]
//     // [0,2][1,1][2,2]

//     // [2,0][2,1][2,2]
//     // [0,0][1,0][2,0]
//     // col to row
//     // [0,2][1,2][2,2]
//     // [2,2][2,1][2,0]
//     // col

//     //row의 규칙은 우측으로 갈 때는 내려가면서 현재 col숫자만큼 row를 더해주면됨
//     //왼쪽으로 갈 때는 0 col col에 있던게 row로 이동


// };

var rotate = function(matrix) {
    const n = matrix.length;

    for (let layer = 0; layer < Math.floor(n / 2); layer++) {
        let first = layer;
        let last = n - 1 - layer;

        for (let i = first; i < last; i++) {
            let offset = i - first;

            // save top
            let top = matrix[first][i];

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