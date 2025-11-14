/**
 * @param {number} n
 * @return {number}
 */

// 타임리밋 실패: 소수의 절반값 까지 1씩 증가시키면서 나눠보게하다가 최초 발견되는 순간 브레이크 시키는 방법
/** 
 * 제곱근까지만 순회해도 된다고함
 * 왜? 제곱근을 기점으로 모든 약수의 경우의수가 다 나오기 때문
 * 1 * 16
 * 2 * 8
 * 4 * 4 --- 약수 조합의 대칭 기준선(제곱근)
 * 8 * 2
 * 16 * 1
 * 하지만 이것도 실패
 */

// var countPrimes = function(n) {
//     let count = 0;
//     // i는 n보다 작은 소수 후보 값
//     for(i = 2; i < n; i++) {
//         let isPrime = true
//         // j는 i를 나눌 값
//         for(j = 2; j * j <= i; j++) {
//             if(i % j === 0) {
//                 isPrime = false;
//                 break;
//             }
//         }
//         if(isPrime) count++;
//     }
//     return count;
// };

var countPrimes = function(n) {
    const primeList = Array.from({ length: n }, (_, i) => i > 1);
    // 이전 방법과 약간 다른 이유로 제곱근까지 순회함
    for(i = 2; i*i <= n; i++) {
        if(primeList[i]) {
            // i 제곱부터 i배수씩 증가시켜서 소수 제거
            for (let j = i * i; j < n; j += i) {
                primeList[j] = false; 
            }
        }
    }
    return primeList.filter((prime)=> prime).length;
};

