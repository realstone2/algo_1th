/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
  const numberObj = { 
    '0': 1,'1':1,'2':1,'3':1,'4':1,'5':1,'6':1,'7':1,'8':1,'9':1,
    '+': 2,'-':2,'.':3,' ':0
  };

  let result = '';       // 숫자 누적용 문자열
  let sign = 1;          // 부호 (기본 양수)
  let started = false;   // 숫자 or 부호 시작 여부
  let idx = 0;

  while (idx < s.length) {
    const ch = s[idx];
    const type = numberObj[ch];

    // (1) 유효하지 않은 문자면 중단
    if (type === undefined) break;

    // (2) 공백
    if (type === 0) {
      if (started) break; // 이미 숫자/부호가 시작됐다면 멈춤
      idx++;
      continue;
    }

    // (3) 부호
    if (type === 2) {
      if (started) break; // 이미 시작됐는데 또 부호면 중단
      sign = (ch === '-') ? -1 : 1;
      started = true;
      idx++;
      continue;
    }

    // (4) 소수점 → myAtoi는 정수 변환이므로 여기서 종료
    if (type === 3) break;

    // (5) 숫자
    if (type === 1) {
      result += ch;
      started = true;
      idx++;
      continue;
    }

    idx++;
  }

  // 숫자가 하나도 없으면 0 반환
  if (result.length === 0) return 0;

  // 문자열을 정수로 변환하고 부호 적용
  let num = Number(result) * sign;

  // (6) 32-bit 정수 범위 제한
  const INT_MAX = 2 ** 31 - 1;
  const INT_MIN = -(2 ** 31);
  if (num > INT_MAX) return INT_MAX;
  if (num < INT_MIN) return INT_MIN;

  return num;
};