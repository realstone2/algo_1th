/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if (n <= 2) return 0;

    let isPrimeArr = new Array(n).fill(true);
    isPrimeArr[0] = isPrimeArr[1] = false; 
    
    for (let i = 2; i * i < n; i++) {
        if (isPrimeArr[i]) {
            for (let j = i * i; j < n; j += i) {
                isPrimeArr[j] = false;
            }
        }
    }
    
    return isPrimeArr.reduce((acc, curr) => curr ? acc + 1 : acc, 0);
};