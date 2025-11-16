/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const arr = Array(n).fill(0);
    return arr.map((_,i) => {
        const index = i + 1;
        if(index % 3 === 0 && index % 5 === 0){
            return "FizzBuzz";
        }

        if(index % 3 === 0){
            return "Fizz";
        }

        if(index % 5 === 0){
            return "Buzz";
        }

        return String(index);
    })
};