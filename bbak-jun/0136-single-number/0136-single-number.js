/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = new Map()

    for(const num of nums) {
        if(map.has(num)) {
            map.set(num, map.get(num) + 1)
        } else {
            map.set(num, 0)
        }
    }

    return [...map.entries()].find(([_, v]) => v === 0)?.[0];
};