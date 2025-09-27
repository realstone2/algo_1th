/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    // nums에서 반복되지 않는 것이 딱 하나 있다
    // findIndex를 사용하면 index가 여러개인지 확인할수 있지않나?
    // 처음에 for문 내부에 filter로 해서 했는데 memory runtime이 너무 오래걸려서 다른 방법으로시도

    // ai한테 비트연산자로 푸는 방법을 제안받았다. nums를 순회하면서 비트연산자 XOR ^=로 계산하면
    // 2회 나온 숫자는 비트 계산시 0과 1이 계산되서 없어지고 한번만 나온 숫자는 계산이 되지 않아 그대로 남아있음
    // let result = 0;
    // for (let num of nums) {
    //     result ^= num
    // }
    // return result

    // ai도움 없이 다른 방법으로도 시도해봄.
    // sort 후에 앞뒤로 비교
    const sortNums = nums.sort();
    for (let i = 0; i < sortNums.length; i += 2) {
        if (sortNums[i] !== sortNums[i + 1]) {
            return sortNums[i]
        }
    }
};