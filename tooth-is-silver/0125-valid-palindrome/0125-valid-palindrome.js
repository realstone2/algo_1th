/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
   const regex = /^[a-z0-9]+$/;
   let str = ''
   for (const word of s.toLowerCase()) {
        if (regex.test(word)) str += word
   }

   if (str.length === 0) return true;

    let i = 0;
    const halfLength = Math.round(str.length / 2)
    while(i < halfLength) {
        console.log(str[i], str[str.length - i - 1])
        if (str[i] !== str[str.length - i - 1]) return false
        i++
    }
    return true
};