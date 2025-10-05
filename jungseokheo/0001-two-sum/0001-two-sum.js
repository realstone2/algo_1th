/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        let result = target - nums[i];
        if (map.has(result)) {
            return [Number(map.get(result)), i];
        } else {
            map.set(nums[i], i);
        }
    }
    
};