/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if(s.length === 1) return true;

    const arr = s.toLowerCase().split('').filter(x => (x !== ' ') && (x >= 0 && x <= 9) || (x >= 'a' && x <= 'z'));

    for(let i = 0; i < arr.length / 2; i++){
        if(arr[i] !== arr[arr.length - 1 -i]){
            return false;
        }
    }
    return true;
};