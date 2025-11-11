// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
var maxSubArray = function(nums) {
    // let max
    // let sumMap = new Map();

    // for(let i = 0; i < nums.length ; i++){
    //     for(let j = i; j < nums.length; j ++){
    //         const prevSum = sumMap.get(getKey(i,j - 1)) ?? 0
    //         const currentSum = prevSum + nums[j];
    //         sumMap.set(getKey(i,j), currentSum);

    //         max = Math.max(currentSum, max ?? currentSum)
    //     }
    // }

    // return max

    let currentSum = nums[0];
    let maxSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// const getKey = (i,j)=>{
//     return `${i} ~ ${j}`
// }

