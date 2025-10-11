/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {

    let i = digits.length - 1;
    let up = false
    while(i >= 0){
        const newNumber = digits[i] + 1
        if(newNumber < 10){
            digits.splice(i, 1, newNumber)
            up = false
            break;
        } else {
            up = true
            digits.splice(i, 1, 0)
        }

        i--
    }

    if(up){
        return [1, ...digits];
    }
    return digits
};