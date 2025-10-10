/**
set을 하면 [2, 2, 1]에서 [2, 1]이 됨

 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const set = new Set();

    nums.forEach(num=>{
      if (set.has(num)) {
        set.delete(num);
      } 
      else {
        set.add(num);
      }
    })

    return [...set][0];
};