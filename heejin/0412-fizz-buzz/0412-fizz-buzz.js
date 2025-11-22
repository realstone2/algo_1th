/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        result.push(
        i % 15 === 0 ? "FizzBuzz" :
        i % 3 === 0  ? "Fizz" :
        i % 5 === 0  ? "Buzz" :
        String(i)
    );
  }

  return result;
};