/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  const numsMap = new Map();

    for(let num of nums){
        if(numsMap.has(num)){ 
            numsMap.delete(num);
        }else{
            numsMap.set(num,"");
        }
    }
    const iterator = numsMap.keys();
    return iterator.next().value  
};