/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    let count = 0;

    while(n > 0){
        const number = n % 2;
        if(number === 1){
            count ++
        }

        n =(n - number) / 2
    }
    return count;
};