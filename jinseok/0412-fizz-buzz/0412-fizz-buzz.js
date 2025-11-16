/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {

    const answer = [];

    for(let i = 1; i <= n; i ++){
        const divisibleThree = (i % 3) === 0
        const divisibleFive = (i % 5) === 0

        if(divisibleThree && divisibleFive){
            answer.push('FizzBuzz');
            continue;
        }

        if(divisibleThree){
            answer.push('Fizz');
            continue;
        }

        if(divisibleFive){
            answer.push('Buzz');
            continue;
        }

        answer.push(i.toString());
    }

    return answer;
};