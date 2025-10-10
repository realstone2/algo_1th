/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 완탐으로 푼거
// var twoSum = function(nums, target) {

//     for(let i=0; i<nums.length-1; i++){
//         for(let j=i+1 ; j<nums.length; j++){
//             if(nums[i]+nums[j]===target){
//                 return [i,j]
//             }
//         }
//     }
    
// };

var twoSum = function (nums,target){
    const hashmap = new Map()

    for(let i=0; i<nums.length;i++){
        const diff = target - nums[i];

        if(hashmap.has(diff)){
            return [hashmap.get(diff),i];
        }
        hashmap.set(nums[i],i);
    }
}