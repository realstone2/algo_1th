/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let str = "";

    digits.forEach(function(num){
        str +=String(num);
    })
    
    const num = BigInt(str) + 1n;
    const result = String(num).split("").map(Number); 

    return result;


};