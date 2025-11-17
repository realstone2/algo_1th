/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
    let target = n;

    if(n <= 0 ){
        return false
    }

    while(target > 1){
        if(target % 3 > 0){
            return false
        }

        target = target / 3
    }


    return true
};