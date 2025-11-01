/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function(s) {
    //문자열만 남기기
    const str = s.match(/[a-z0-9]/gi)?.join('').toLowerCase() || ""
    if(str.length === 0) return true
    
    for (let i=0; i<str.length; i++) {
        if(str[i] !== str[str.length-1-i]) return false
    }
    
    return true
};