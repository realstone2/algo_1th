/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    const vaildSet = new Set()

    for (let i = 0; i < board.length; i++) {
        for (let k = 0; k < board.length; k++) {
            const value = board[i][k]

            if (value === '.') {
                continue;
            }

            const boxIndex = Math.floor(i / 3) * 3 + Math.floor(k / 3)

            const rowKey = `R${i}-${value}` // "R1-5" (1행에 숫자 5)
            const colKey = `C${k}-${value}` // "C4-5" (4열에 숫자 5)
            const boxKey = `S${boxIndex}-${value}`

            // Set에 하나라도 이미 있다면 중복
            if (vaildSet.has(rowKey) || vaildSet.has(colKey) || vaildSet.has(boxKey)) {
                return false
            }

            // 중복 없으면 추가
            vaildSet.add(rowKey)
            vaildSet.add(colKey)
            vaildSet.add(boxKey)
        }
    }
    return true
}
