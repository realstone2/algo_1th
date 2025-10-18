function longestCommonPrefix(strs: string[]): string {
 
  // 첫 문자열 세팅 
  let prefix = strs[0];

  // 문자열 비교
  for (let i = 1; i < strs.length; i++) {
    // prefix가 현재 문자열의 시작부분이 아닐 때까지 줄인다.
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.slice(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }

  return prefix;
};