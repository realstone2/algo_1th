/**
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
  s = s.trim();
  if (s.length === 0) return 0;

  let sign = 1;
  let i = 0;

  if (s[i] === '+' || s[i] === '-') {
    if (s[i] === '-') sign = -1;
    i++;
  }

  let str = "";
  for (; i < s.length; i++) {
    const ch = s[i];
    if (ch >= '0' && ch <= '9') {
      str += ch;
    } else {
      break;
    }
  }

  // 숫자 없는 경우
  if (str.length === 0) return 0;

  // 문자열을 숫자로 변환
  let num = Number(str) * sign;

  // 변환 실패 시 (NaN) → 0 처리
  if (isNaN(num)) return 0;

  const INT_MIN = -2147483648;
  const INT_MAX = 2147483647;

  if (num < INT_MIN) return INT_MIN;
  if (num > INT_MAX) return INT_MAX;

  return num;
}
