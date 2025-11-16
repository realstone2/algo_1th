/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let result = [];

    for (let i = 0; i < n; i++) {
        const number = i + 1;
        // idx + 1 이 3, 5 둘 다 나눠지는가?
        if (number % 3 === 0 && number % 5 === 0) {
            result.push('FizzBuzz')
        }
        // idx + 1 이 3으로 나눠지는가?
        else if (number % 3 === 0) {
            result.push('Fizz')
        }
        // idx + 1 이 5로 나눠지는가?
        else if (number % 5 === 0) {
            result.push('Buzz')
        }
        // 아무것도 아니면 그냥 string넣기
        else {
            result.push(String(i + 1))
        }
    }

    return result
};