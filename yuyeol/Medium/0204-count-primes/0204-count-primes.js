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

// 배수를 가진 값들은 모조리 소거하는 방식
var countPrimes = function(n) {
    if (n <= 2) {
        return 0;
    }
    const primeList = Array.from({ length: n }, (_, i) => i > 1);
    // 이전 방법과 약간 다른 이유로 제곱근까지 순회함
    // n이 100이라면 10까지만 순회하면 된다는 것인데, 예를들어 2 * 11은 i가 2인 순회에서 소거되기때문
    for(i = 2; i * i <= n; i++) {
        if(primeList[i]) {
            // n까지의 i 배수들은 몽땅 제거
            // 왜 i제곱부터 시작하냐? i보다 작은 배수들은 이전 순회에서 이미 소거되었기때문
            // 3의 제곱보다 작은 3 * 2는 2 * 3 순회에서 이미 소거했음
            // 3의 제곱보다 큰 3의 배수부터 소거를 진행해야 중복계산을 줄임
            for (let j = i * i; j < n; j += i) {
                primeList[j] = false; 
            }
        }
    }
    return primeList.filter(prime => prime).length;
};
// n이 16일때 순회 과정
// primeList = [false, false, true, true, ... true]
// i = 2일 때: 2의 배수인 4, 6, 8, 10, 12, 14를 false로 만듭니다.
// i = 3일 때: 3의 배수인 9, 12, 15를 false로 만듭니다.
// i = 4일 때: primeList[4]가 이미 false이므로 아무것도 안 하고 넘어갑니다.
// 남아있는 true에 해당하는 값(2, 3, 5, 7, 11, 13)의 개수인 6을 반환합니다.
