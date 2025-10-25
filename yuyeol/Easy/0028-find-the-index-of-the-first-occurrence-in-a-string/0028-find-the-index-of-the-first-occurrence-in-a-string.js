/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

// 시간복잡도가 n^2로 보이지만, 엄밀히 말하면 n(haystack) * m(needle)이다.
var strStr = function(haystack, needle) {
    // neelde을 찾는것이 목표이므로 마지막 needle 첫자리까지만 순회하면됨
    for(let i = 0; i <= haystack.length - needle.length; i++) {
        // needle의 첫글자가 haystack이 있으면 그 지점에서 needle과 일치를 확인
        if(needle[0] === haystack[i]) {
            // 일단 true, 미충족 시 false로 전환
            let matched = true;
            // j는 첫글자가 발견된 i에서 시작, i 인덱스부터 needle 길이만큼 순회
            for(let j = i; j <  i + needle.length; j++) {
                // 순회하다가 needle과 haystack 인덱스의 값이 일치하지 않을경우 break
                if(haystack[j] !== needle[j - i]) {
                    matched = false
                    break;
                }
            }
            if(matched) return i;
        }
    }
    return -1;
};