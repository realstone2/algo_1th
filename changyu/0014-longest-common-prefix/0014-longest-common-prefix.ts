function longestCommonPrefix(strs) {
  // 1. 첫 번째 문자열을 기준으로
  let prefix = strs[0];

  // 2. 나머지 문자열들과 비교
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, -1);
      if (!prefix) return "";
    }
  }

  return prefix;
}
