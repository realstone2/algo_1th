function myAtoi(s) {
  // 1. 공백 제거
  s = s.trim();

  // 2. 부호 판별
  let sign = 1;
  if (s[0] === '-') {
    sign = -1;
    s = s.slice(1);
  } else if (s[0] === '+') {
    s = s.slice(1);
  }

  // 3. 숫자 읽기
  let numStr = '';
  for (const ch of s) {
    if (ch < '0' || ch > '9') break;
    numStr += ch;
  }

  // 숫자가 없으면 0
  if (numStr === '') return 0;

  let num = sign * Number(numStr);

  // 4. 32비트 범위 조정
  const INT_MIN = -(2 ** 31);
  const INT_MAX = 2 ** 31 - 1;

  if (num < INT_MIN) return INT_MIN;
  if (num > INT_MAX) return INT_MAX;

  return num;
}