/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = (n) => {
    const answer = [];

    for (let i = 1; i <= n; i++) {
        let result = "";

        if (i % 3 === 0 && i % 5 === 0) {
            result = "FizzBuzz";
        } 
        else if (i % 3 === 0) {
            result = "Fizz";
        } 
        else if (i % 5 === 0) {
            result = "Buzz";
        } 
        else {
            result = i.toString();
        }

        answer.push(result);
    }

    return answer;
};