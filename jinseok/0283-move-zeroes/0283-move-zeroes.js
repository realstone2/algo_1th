/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let loop = false

    let loopIndex = nums.length -1
    let i = 0;

    while(i <= loopIndex){
        const current = nums[i];

        if(current !== 0){
            i++
            continue;
        }


        let temp;

        for(let j = i; j < loopIndex; j++){
            if(nums[j + 1] === 0){
                loop = true;
            }
            temp = nums[j+1];
            nums[j+1] = nums[j];
            nums[j] = temp;
        }
        loopIndex --
    
        if(loop){
            i --
        }else{
            i ++ 
        }
    }
};