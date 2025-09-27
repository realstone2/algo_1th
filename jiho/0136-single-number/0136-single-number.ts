function singleNumber(nums: number[]): number {

    while(nums.length > 1) {
        const pick = nums.pop()
        
        if(nums.includes(pick)){
            const index = nums.indexOf(pick)
            nums.splice(index, 1)
        }
        else return pick

    }

    return nums[0]
};