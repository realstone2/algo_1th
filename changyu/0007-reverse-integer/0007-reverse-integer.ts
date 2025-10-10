function reverse(x: number): number {
	const sign = x < 0 ? -1 : 1;
	const res = Number(String(Math.abs(x)).split("").reverse().join("")) * sign;

	if (res < -(2 ** 31) || res > 2 ** 31 - 1) {
		return 0;
	}

	return res;
}