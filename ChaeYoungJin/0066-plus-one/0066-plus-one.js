/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const newString = digits.join('')
    const newNum = BigInt(newString)
    const newArr = (newNum + 1n).toString().split('').map(Number)
    return newArr
};