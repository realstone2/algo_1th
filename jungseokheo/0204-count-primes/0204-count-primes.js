/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
    if (n === 0 || n === 1 ) return 0;

    let array = new Array(n).fill(true);

    array[0] = false;
    array[1] = false;

    for (let i = 2; i * i < n; i++) {
        if (array[i] === true) {
            for (let j = i * i; j < n; j += i) {
                array[j] = false;
            }
        }
    }

    return array.filter(i => i).length;
};