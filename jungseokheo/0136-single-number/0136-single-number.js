/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function(nums) {
    let set = new Set();
    for (num of nums) {
        set.has(num) ? set.delete(num) : set.add(num);
    }
    return [...set][0];
    /**
    모범 답안
    [4,1,2,1,2]를 모두 XOR하면:
    4 ^ 1 ^ 2 ^ 1 ^ 2

    교환법칙으로 같은 수끼리 묶으면:
    = 4 ^ (1 ^ 1) ^ (2 ^ 2)

    같은 수끼리 XOR하면 0:
    = 4 ^ 0 ^ 0
    
    0과 XOR하면 자기 자신: 
    =4
    let result = 0;
    for (let num of nums) {
        result ^= num;
    }
    return result;
     */

};