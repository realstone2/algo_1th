/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    // 3의 배수이면 Fizz
    // 5의 배수이면 Buzz
    // 3과 5의 배수면 FizzBuzz

    const answer = []

    for (let i = 1 ; i <= n ; i++){
        if (i % 3 === 0 && i % 5 === 0){
            answer.push("FizzBuzz")
        }else if (i % 3 === 0){
            answer.push("Fizz")
        }else if (i % 5 === 0){
            answer.push("Buzz")
        }else {
            answer.push(String(i))
        }
    }
    return answer
};