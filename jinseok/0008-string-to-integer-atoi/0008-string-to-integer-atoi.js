const singleDigit = /^[0-9]$/;
const plusMinus = /[+\-]/;

const minimum = -Math.pow(2, 31)
const maximum =  Math.pow(2, 31) - 1

/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    //빈스트링은 제거
    //마이너스인지 플러스인지 판단하기
    //숫자가없으면 0, 영문자가 나오기전까지 숫자로 판단
    //라운딩처리 

    // if(!singleDigit.test(s[0]) && !plusMinus.test(s[0])){
    //     return 0
    // }
    
    let isMinus = false;
    let string = s.trim()
    let resultString = ''

    let i = 0;

    if(plusMinus.test(string[0])){
        if(string[0] === '-'){
            isMinus = true
        }
        i++
    }

    while(singleDigit.test(string[i])){
        const currentChar = string[i];

        if(!resultString && !Number(currentChar)){
            i++
            continue;
        }

        resultString += currentChar
        i++
    }

    if(!resultString){
        return 0;
    }

    const resultNumber = Number(`${isMinus ? '-' : '+'}${resultString}`)

    if(isMinus){
        return Math.max(resultNumber, minimum)
    }

    return Math.min(resultNumber, maximum)
};