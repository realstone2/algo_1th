/**
 * @param {number} x
 * @return {number}
 */
const reverse = (x) => {
    const isNegative = x < 0;
    let str = Math.abs(x).toString().split("").reverse().join(""); // 절대값 뒤집기
    let result = parseInt(str, 10); // 숫자로 변환

    if (isNegative) result = -result;

    // 32비트 범위 체크
    if (result < -(2 ** 31) || result > 2 ** 31 - 1) {
        return 0;
    }

    return result;
};