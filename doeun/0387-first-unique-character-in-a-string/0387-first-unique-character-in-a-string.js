/**
 * @param {string} s
 * @return {number}
 */

//20~24초
// const firstUniqChar = function (s) {
//     // 중복된 문자가 아니라면 앞 뒤로 수색했을때 인덱스가 같다.
//     for (let i = 0; i < s.length; i++) {
//         if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
//             return i;
//         }
//     }
//     return -1;
// }; 



const firstUniqChar = function (s) {
    // Map에 갯수 담고 1개인거 반환하기 하면 1반복으로 끝낼 수 있
    const count = new Map();

    // 각 문자 횟수 세기
    for (let char of s) {
        count.set(char, (count.get(char) || 0) + 1);
    }

    // 등장 횟수 1 인거 찾아서 반환
    for (let i = 0; i < s.length; i++) {
        if (count.get(s[i]) === 1) {
            return i;
        }
    }

    return -1;
};