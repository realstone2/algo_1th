/**
 * @param {number} n
 * @return {number}
 */

const countPrimes = function(n) {
    const isPrime = Array(n).fill(true);
    isPrime[0] = isPrime[1] = false;

    for (let i = 2; i * i < n; i++)
        if (isPrime[i])
        for (let j = i * i; j < n; j += i)
            isPrime[j] = false;

    return isPrime.reduce((acc, cur) => acc + (cur ? 1 : 0), 0);
};