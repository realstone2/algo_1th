/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    // 중복 문자가 있으면 건너뛰고 하나만 있는 문자가 있으면 해당 idx를 리턴
    let idx = 0;
    while (idx < s.length) {
        // aabb의 경우 2번째 a는 앞에 a가 있기때문에 유일하지 않다고 생각해야함
        if (!s.slice(0, idx).includes(s[idx]) && !s.slice(idx + 1).includes(s[idx])) return idx
        idx++
    }
    return -1
};