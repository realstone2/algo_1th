/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    // 영문자와 숫자만 남기기
    s = s.replace(/[^a-z0-9]/gi, '')

    // 모두 소문자로 변환
    s = s.toLowerCase()

    // 투 포인터로 앞뒤 비교
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] !== s[right]) return false
        left++
        right--
    }

    // 모든 문자가 일치하면 true
    return true;
};