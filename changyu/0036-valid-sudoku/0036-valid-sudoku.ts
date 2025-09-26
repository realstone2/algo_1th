function isValidSudoku(board: string[][]): boolean {
	const rows = Array.from({ length: 9 }, () => new Set());
	const cols = Array.from({ length: 9 }, () => new Set());
	const boxes = Array.from({ length: 9 }, () => new Set());

	for (let i = 0; i < 9; i++) {
		for (let j = 0; j < 9; j++) {
			const num = board[i][j];

			if (num === '.') continue;

			if (rows[i].has(num)) return false;
			rows[i].add(num);

			if (cols[j].has(num)) return false;
			cols[j].add(num);

			const boxIndex = Math.floor(i / 3) * 3 + Math.floor(j / 3);
			if (boxes[boxIndex].has(num)) return false;
			boxes[boxIndex].add(num);
		}
	}

	return true;
}