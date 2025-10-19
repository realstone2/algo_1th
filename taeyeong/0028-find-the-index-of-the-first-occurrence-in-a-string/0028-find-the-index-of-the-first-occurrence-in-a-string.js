/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
};


// KMP 알고리즘 (Knuth–Morris–Pratt) ..?
// 부분 일치를 활용해서 이미 일치한 정보를 재활용합니다.
// 중복 비교를 피해서 효율적으로 탐색해요.

// function strStr(haystack, needle) {
//   if (needle === "") return 0;

//   // \U0001f539 접두사-접미사 테이블 생성
//   const lps = new Array(needle.length).fill(0);
//   let len = 0;
//   for (let i = 1; i < needle.length; ) {
//     if (needle[i] === needle[len]) {
//       lps[i++] = ++len;
//     } else if (len > 0) {
//       len = lps[len - 1];
//     } else {
//       lps[i++] = 0;
//     }
//   }

//   // \U0001f539 haystack 탐색
//   let i = 0, j = 0;
//   while (i < haystack.length) {
//     if (haystack[i] === needle[j]) {
//       i++; j++;
//       if (j === needle.length) return i - j;
//     } else if (j > 0) {
//       j = lps[j - 1];
//     } else {
//       i++;
//     }
//   }
//   return -1;
// }