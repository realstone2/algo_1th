/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let number = Math.abs(x) ;

    const min = -Math.pow(2, 31)
    const max = Math.pow(2, 31) - 1

    const isNegativeNumber = x < 0

    const array = []

    while(number !== 0){
        const remainder = number % 10;
        if(array.length === 0 && remainder === 0){
            number = Math.floor(number / 10)
            continue;
        }
        number = Math.floor(number / 10)

        array.push(remainder);
    }

    const result = isNegativeNumber ? -Number(array.join('')) : Number(array.join(''))

    if(result < min){
        return 0;
    }

    if(result > max){
        return 0
    }

    return result


    return 
};