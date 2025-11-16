/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
    if (n <= 2) return 0;
    
    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false; // 0, 1은 소수 아님
    
    //2는 소수니까 남기고, 2의 배수들(4, 6, 8...)은 다 지움
    // i * i < n까지만 체크하면 된다 (√n까지만)
    for (let i = 2; i * i < n; i++) {
        if (isPrime[i]) {
            // i의 배수들을 모두 제거
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    return isPrime.filter(Boolean).length;
};