/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;

    const isPrime = Array.from({length: n}, (v, i) => i < 2 ? false : true )

    // 앞에서 이미 소수로 계산된 숫자들은 제외하고 계산
    const limit = Math.sqrt(n);

    for (let i = 2; i < limit + 1; i++) {
        if (!isPrime[i]) continue;
        for (let j = i * i; j < n; j += i) {
            isPrime[j] = false;
        }
    }
    
    return isPrime.reduce((count, prime) => count + (prime ? 1 : 0), 0);
};