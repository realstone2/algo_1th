/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
    const n = matrix.length;
    // 빈 배열
    const 정답 = Array(n).fill(null).map(() => Array(n).fill(0));
    
    for (let row = 0; row < n; row++) {
        for (let col = 0; col < n; col++) {
            정답[col][n - 1 - row] = matrix[row][col];
        }
    }
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            matrix[i][j] = 정답[i][j];
        }
    }
}

/** 조건
    n*n 2중 배열을 90도 회전시키면 된다.
 */
/** 시간 복잡도
    어케 계산해야하지...? 감 안옴
    브루트포스로 생각해보자.

    나중에 클로드한테 물어봐야겠음
 */
/** 규칙찾기
    기존 배열을 Map에 ([row, col], value) 형태로 집어넣는다.
    n값에 따라서 row와 col를 다시 계산 -> 배열 변경
    ...규칙없나?
    (0,0) -> (0, 2)
    (0,1) -> (1, 2)
    (0,2) -> (2, 2)
    (1,0) -> (0, 1)
    (1,1) -> (1, 1)
    (1,2) -> (2, 1)
    (2,0) -> (0, 0)
    (2,1) -> (1, 0)
    (2,2) -> (2, 0)
    좌우반전!!
    찾았다!!!
    (col, n-1-row)
 */