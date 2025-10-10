/**
 * @param {number[]} digits
 * @return {number[]}
 */

const plusOneRecursive = (arr, index) => {
    if (index < 0) {
        arr.unshift(1); 
        return arr;     
    }

    arr[index]++; // 현재 자리에 1을 더합니다.

    if (arr[index] < 10) {
        return arr;
    }

    arr[index] = 0;
    return plusOneRecursive(arr, index - 1);    
}

var plusOne = function(digits) {
    return plusOneRecursive(digits, digits.length - 1);
};