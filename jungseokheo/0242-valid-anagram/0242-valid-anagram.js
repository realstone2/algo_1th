/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function(s, t) {
    // 길이가 다르면 바로 false
    if (s.length !== t.length) return false;
    
    // 두 문자열을 정렬해서 비교
    const sortedS = s.split('').sort().join('');
    const sortedT = t.split('').sort().join('');
    
    return sortedS === sortedT;
};