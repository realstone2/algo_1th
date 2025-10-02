/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    // 중복이 아니다.. 앞 뒤로 수색했을때 인덱스가 같다.
    // 반복을 너무 돌았나 끝자락에 있음
    for (let i = 0; i < s.length; i++) {
        if (s.indexOf(s[i]) === s.lastIndexOf(s[i])) {
            return i;
        }
    }
    return -1;
};

// const firstUniqChar = function (s) {
//     // Map에 갯수 담고 1개인거 반환하기 하면 1반복으로 끝낼 수 있
//     const count = new Map();

//     // 각 문자 횟수 세기
//   for (let i = 0; i < s.length; i++) {
//         if (count.get(s[i]) === 1) {
//             return i;
//         }
//     }
    
//     return -1;
// };