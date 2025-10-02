/**
 * @param {string} s
 * @return {number}
 */
const firstUniqChar = function (s) {
    // 중복이 아니다.. 앞 뒤로 수색했을때 인덱스가 같다.
    const repeats = [...s];
    for (let i = 0; i < repeats.length; i++) {
        if (repeats.indexOf(repeats[i]) === repeats.lastIndexOf(repeats[i])) {
            return i;
        }
    }
    return -1;
};