/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MIN = -(2 ** 31);    // -2,147,483,648
    const INT_MAX = 2 ** 31 - 1; // 2,147,483,647

    let reversedStr = Math.abs(x).toString().split('').reverse().join('');
    
    let reversedInt = parseInt(reversedStr) * Math.sign(x);

    if (reversedInt < INT_MIN || reversedInt > INT_MAX) {
        return 0;
    }
    
    return reversedInt;
    
};