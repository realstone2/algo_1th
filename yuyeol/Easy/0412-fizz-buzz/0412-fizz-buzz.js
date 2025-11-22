/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const array = Array.from({ length: n }, 
        (_, index) => {
            let number = index + 1;
            if(number % 3 === 0 && number % 5 === 0) return "FizzBuzz";
            if(number % 3 === 0) return "Fizz";
            if(number % 5 === 0) return "Buzz";
            return String(number);
        });
    return array
};