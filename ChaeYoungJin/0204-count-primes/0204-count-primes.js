var countPrimes = function(n) {
    if (n <= 2) return 0;
    
    const isPrime = new Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;
    
    // 카운트를 직접 계산 (filter 사용 안 함)
    let count = 0;
    
    for (let i = 2; i < n; i++) {
        if (isPrime[i]) {
            count++;
            
            // i의 배수들을 제거
            // i * i부터 시작 (그 전 배수들은 이미 제거됨)
            for (let j = i * i; j < n; j += i) {
                isPrime[j] = false;
            }
        }
    }
    
    return count;
};