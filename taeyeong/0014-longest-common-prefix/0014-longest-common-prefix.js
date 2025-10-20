/**
 * @param {string[]} strs
 * @return {string}
 */


/** 
 정렬 기반 풀이
  
  문자열을 사전순으로 정렬하고 
  가장 앞의 문자열과 가장 뒤의 문자열만 비교하면 된다.

  이유는 
  정렬 후 가장 차이가 큰 두 문자열만 비교해도
  전체 공통 접두사를 구할 수 있기 때문이다.

  사전순으로 정렬하면 첫 문자열과 마지막 문자열이면 중간 문자열들은 순서에 포함이 되니까.

 */
var longestCommonPrefix = function(strs) {
    if(!strs.length) return "";

    // 이렇게 사전순으로 정렬하는 것이 포인트 인듯.
    strs.sort();

    let first = strs[0];
    let last = strs[strs.length - 1];

    let i = 0;
    while (i < first.length && first[i] === last[i]) {
        i++;
    }

    return first.substring(0, i);
};


// 단순 탐색 (Brute Force) 방법 풀이

// var longestCommonPrefix = function(strs) {
//     if (!strs.length) return "";

//     // 첫 번째 단어를 기준으로
//     let prefix = strs[0];

//     for (let i = 1; i < strs.length; i++) {
//         // 현재 단어와 공통된 접두사를 찾는다
//         while (strs[i].indexOf(prefix) !== 0) {
//             prefix = prefix.slice(0, -1); // 접두사 한 글자씩 줄이기
//             if (prefix === "") return "";
//         }
//     }

//     return prefix;
// };