function isValidSudoku(board: string[][]): boolean {
	const rows = Array.from({ length: 9 }, () => new Set());
	const cols = Array.from({ length: 9 }, () => new Set());
	const box = Array.from({ length: 9 }, () => new Set());

	for (let i = 0; i < board.length; i++) {
		for (let j = 0; j < board.length; j++) {
			const value = board[i][j];

			if (value === '.') continue;

			const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);

			if (rows[i].has(value) || cols[j].has(value) || box[boxIndex].has(value)) {
				return false;
			}

			rows[i].add(value);
			cols[j].add(value);
			box[boxIndex].add(value);
		}
	}

	return true;
}