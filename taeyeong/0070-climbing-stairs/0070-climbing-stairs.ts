function climbStairs(n: number): number {
  // 1 또는 2칸짜리 계단은 그대로 반환 (이게 기저 조건)
  if (n <= 2) return n;

  // f(1)과 f(2) 초기값 설정
  let first = 1;
  let second = 2;

  // 3번째 계단부터 n번째까지 반복
  for (let i = 3; i <= n; i++) {
     const next = first + second; // 현재 계단의 방법의 수 계산
     first = second;                      // 다음 계산을 위해 이동
     second = next;
  }
  

  // 최종 결과
  return second;
};