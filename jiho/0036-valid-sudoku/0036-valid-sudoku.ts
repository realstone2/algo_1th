function isValidSudoku(board: string[][]): boolean {
    const GRID_SIZE = 9;
    const BOX_SIZE = 3;
    const rowSets = Array.from({length: GRID_SIZE}, () => new Set())
    const colSets = Array.from({length: GRID_SIZE}, () => new Set())
    const boxSets = Array.from({length: GRID_SIZE}, () => new Set())



    for(let i = 0; i < GRID_SIZE; i ++) {
        for(let j = 0; j < GRID_SIZE; j ++) {
            const num = board[i][j]
            const boxIndex = Math.floor(i / BOX_SIZE) * BOX_SIZE + Math.floor(j / BOX_SIZE);

            if(num === '.') continue
            if(rowSets[i].has(num) || colSets[j].has(num) || boxSets[boxIndex].has(num)) return false

            rowSets[i].add(num)
            colSets[j].add(num)
            boxSets[boxIndex].add(num)
        }
    }

    return true
};