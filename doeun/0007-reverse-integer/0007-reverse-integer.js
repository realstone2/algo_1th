/**
 * @param {number} x
 * @return {number}
 */
const reverse = function (x) {
  // 음수 처리
  const isNegative = x < 0;
  // 절대값 처리 후 > 문자열로 변환 > 뒤집기
  const reversed = Math.abs(x).toString().split("").reverse().join("");
  const result = Number(reversed) * (isNegative ? -1 : 1);

  // 32비트 정수 범위 체크
  if (result < -(2 ** 31) || result > 2 ** 31 - 1) return 0;

  return result;
};
