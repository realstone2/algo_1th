function firstUniqChar(s) {
  const count = {};

  // 1. 각 문자 빈도 세기
  for (let char of s) {
    count[char] = (count[char] || 0) + 1;
  }

  // 2. 문자열을 처음부터 순회하며 빈도가 1인 첫 번째 문자 찾기
  for (let i = 0; i < s.length; i++) {
    if (count[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}