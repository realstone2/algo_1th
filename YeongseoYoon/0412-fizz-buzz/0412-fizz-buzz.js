/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = Array(n).fill('');

    arr.map((val, index) => {
        const num = index+1;
        if(num % 3 === 0 && num % 5 === 0){
            arr[index] = "FizzBuzz";
        }else if(num % 3 === 0 ){
            arr[index] = "Fizz";
        }else if(num % 5 === 0 ){
            arr[index] = "Buzz";
        }else{
            arr[index] = num+"";
        }
    })

    return arr;
};