function countPrimes(n: number): number {
    const isPrime = new Array(n + 1).fill(true);
	isPrime[0] = isPrime[1] = false;

	for (let i = 2; i <= Math.sqrt(n); i++) {
		if (isPrime[i]) {
			// i의 배수들을 false로 설정 (i의 배수 = 합성수 = 소수가 될 수 없음)
			for (let j = i * i; j <= n; j += i) {
				isPrime[j] = false;
			}
		}
	}

    let count = 0
    for (let i = 2; i < n ; i++){
        if(isPrime[i]) count +=1
    }

    return count
}; 