function isValidSudoku(board: string[][]): boolean {
    
    function checker(array: string[]): boolean {
        const 셋 = new Set<string>()

        for (let i = 0; i < 9; i++){
            if (array[i] !== "." && 셋.has(array[i])) return false

            셋.add(array[i])
        }
        
        return true
    }

    function get3x3Box(startRow: number, startCol: number): string[] {
        const box = [];
        for (let row = startRow; row < startRow + 3; row++) {
            for (let col = startCol; col < startCol + 3; col++) {
                box.push(board[row][col]);
            }
        }
        return box;
    }


    // 가로 check
    for (let row = 0; row < 9; row++){
        if (!checker(board[row])) return false;
    }
    
    // 세로 check
    for (let col = 0; col < 9; col++){
        const columns = board.map(row => row[col]);
        if (!checker(columns)) return false;
    }
    
    // box check
    for (let boxRow = 0; boxRow < 9; boxRow += 3) {
        for (let boxCol = 0; boxCol < 9; boxCol += 3) {
            if (!checker(get3x3Box(boxRow, boxCol))) return false;
        }
    }

    return true
};

/** 조건
    1. 9*9배열이 주어짐 
    2. 가로에 동일한 숫자가 없는지 확인하기
    3. 세로에 동일한 숫자가 없는지 확인하기
    4. 하위 상자 내에 동일한 숫자가 없는지 확인하기
 */

/** 시간 복잡도
    9*9면 걍 신경 끄면 됨
 */

/** 구현
    그냥 Map쓰면 될듯.
    배열 쑤셔박고 각 함수들에서 check하는걸로 하자
    4중 for문은 좀 그런데,, 헬퍼로 분리.
 */