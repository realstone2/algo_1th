/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    const map = {};
    
    for(const num of nums){
        if(map[num]) {
            delete map[num]
        } else{
            map[num] = true;
        }
    }
    return Number(Object.keys(map).at(0));
};