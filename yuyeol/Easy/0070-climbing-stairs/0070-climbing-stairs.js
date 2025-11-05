/**
 * @param {number} n
 * @return {number}
 */
// 핵심: n칸 오르는 경우의수가 n-1칸 오르는 경우의수 + n-2칸 오르는 경우의수라는것
var climbStairs = function(n) {
    if (n <= 2) return n;
    let a = 1; // climbStairs(1)
    let b = 2; // climbStairs(2)
    // i <= 2의 경우는 순회생략
    for (let i = 3; i <= n; i++) {
        const c = a + b; // climbStairs(i) = climbStairs(i-1) + climbStairs(i-2)
        a = b;
        b = c;
    }
  return b;
};