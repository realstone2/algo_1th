/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    // if (n <= 2) return 0;

    // const isPrime = Array.from({length: n}, (v, i) => i < 2 ? false : true )

    // // 앞에서 이미 소수로 계산된 숫자들은 제외하고 계산
    // const limit = Math.sqrt(n);

    // for (let i = 2; i < limit + 1; i++) {
    //     if (!isPrime[i]) continue;
    //     for (let j = i * i; j < n; j += i) {
    //         isPrime[j] = false;
    //     }
    // }
    
    // return isPrime.reduce((count, prime) => count + (prime ? 1 : 0), 0);
    if (n <= 2) return 0;
  
  const isPrime = new Array(n).fill(true);
  isPrime[0] = isPrime[1] = false;
  
  // 2의 배수 제거
  for (let i = 4; i < n; i += 2) {
    isPrime[i] = false;
  }
  
  // 3부터 √n까지 홀수만 체크
  const limit = Math.floor(Math.sqrt(n));
  for (let i = 3; i <= limit; i += 2) {
    if (!isPrime[i]) continue;
    
    // i²부터 2i씩 (홀수만)
    for (let j = i * i; j < n; j += i * 2) {
      isPrime[j] = false;
    }
  }
  
  // 카운트
  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrime[i]) count++;
  }
  
  return count;
};