/**
 * @param {number[]} nums
 * @return {number}
 */

//  O(n^2) 접근으로 하면 무조건 타임리밋...
// var maxSubArray = function(nums) {
//     let maxSum = nums[0];
//     for(let i = 0; i < nums.length; i++) {
//         let sum = 0;
//         for(let j = i; j < nums.length; j++) {
//             sum += nums[j]
//             if(sum > maxSum) maxSum = sum;
//             if(sum < 0) break;
//         }
//     }
//     return maxSum;
// };

var maxSubArray = function(nums) {
    let maxSum = nums[0];
    let sum = 0;
    for(let i = 0; i < nums.length; i++) {
        if(sum < 0) sum = 0;
        sum += nums[i];
        if(sum > maxSum) maxSum = sum;
    }
    return maxSum;
};