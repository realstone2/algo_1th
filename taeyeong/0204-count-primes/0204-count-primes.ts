function countPrimes(n: number): number {
  if (n <= 2) return 0;

  const isPrime = new Array<boolean>(n).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  // i는 √n 까지만 확인하면 충분
  for (let i = 2; i * i < n; i++) {
    if (isPrime[i]) {
      // i의 배수들을 지움
      for (let j = i * i; j < n; j += i) {
        isPrime[j] = false;
      }
    }
  }

  // true인 것(소수) 개수 세기
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) count++;
  }

  return count;
}