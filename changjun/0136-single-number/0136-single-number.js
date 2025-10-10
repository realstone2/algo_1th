/**
 * @param {number[]} nums
 * @return {number}
 */

 // [1,2,2]
 // [1,2]
 // [2,2,2,2,2,2,2,1] =1
// [-1,-1,-1,-1, 11,-2-,2] = 11
 // output = 1

 // 중복되는 숫자말고 중복 안되는 숫자 찾기

var singleNumber = function(nums) {
  const newSet = new Set();
  const newArr = [];

  for(const num of nums){
    // 이미 있으면
    if(newSet.has(num)){
        newSet.delete(num);
    }
    else{
    newSet.add(num);
    }
  }  
    return [...newSet][0]
};