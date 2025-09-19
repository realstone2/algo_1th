/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const uniqueSet = new Set()
    

    
    nums.forEach(v => uniqueSet.add(v));
    const nuniqueArray= [...uniqueSet]
        console.log(uniqueSet)
    
    nuniqueArray.forEach((v,index) => {

        nums[index]=v
    })
    

    

    
    return uniqueSet.size
    
};