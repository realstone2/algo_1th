/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();

    let 첫번째문자= strs[0];
    let 마지막문자= strs[strs.length-1];


     let 단어위치 = 0;
  while (단어위치 < 첫번째문자.length && 단어위치 < 마지막문자.length && 첫번째문자[단어위치] === 마지막문자[단어위치]) {
    단어위치++;
  }

  return 첫번째문자.substring(0, 단어위치);
};