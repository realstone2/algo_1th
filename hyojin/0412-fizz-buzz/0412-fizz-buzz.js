/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];

    for(let i = 1; i <= n; i++){
        let char = '';

        if(i % 3 === 0) {
            char += "Fizz";
        }
        if(i % 5 === 0){
            char += "Buzz";
        }    
        if(i % 3 !== 0 && i % 5 !==0){
            char += i;  
        }

        result.push(char);
    }

    return result;
};