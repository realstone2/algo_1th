/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    let num = 0;

    while(x !== 0){
        let y = x % 10;
        x = ( x - y) / 10;

        if(num > Math.pow(2, 31) / 10 || (num === Math.pow(2, 31) / 10 && y > 7)){
            return 0;
        }
        
        if(num < Math.pow(-2, 31) / 10 || (num === Math.pow(-2, 31) / 10 && y < -8)){
            return 0;
        }

        num = num * 10 + y;
    }
    return num;
};