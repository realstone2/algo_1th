/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const isRowValid = board.map(rows => rows.filter((v) => v !== ".")).every((nums) => {
        return nums.join("") === [...new Set(nums)].join("")
    })

    if(!isRowValid) return false

    const cols = []

    for(let i = 0; i < board.length; i++) {
        cols.push(board.map((row) => row[i]))
    }

    const isColValid = cols.map(col => col.filter((v) => v !== ".")).every((nums) => {
        return nums.join("") === [...new Set(nums)].join("")
    })

    if(!isColValid) return false

    const boxes = Array.from({ length: 9 }, () => [])

    for (let r = 0; r < 9; r++) {
        for (let c = 0; c < 9; c++) {
            const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3)
            boxes[boxIndex].push(board[r][c])
        }
    }

    const isBoxValid = boxes
        .map(box => box.filter(v => v !== "."))
        .every(nums => nums.join("") === [...new Set(nums)].join(""))

    if (!isBoxValid) return false

    return true
};