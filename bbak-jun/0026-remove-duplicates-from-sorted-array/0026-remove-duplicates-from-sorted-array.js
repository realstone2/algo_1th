/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let write = 0

    for(let read = 0; read < nums.length; read++) {
        if(read === 0) {
            nums[write] = nums[read];
            write +=1
            continue
        }

        const prev = nums[read - 1]
        const current = nums[read]

        if(prev === current) {
            continue
        } else {
            nums[write] = current
            write +=1
        }
    }

    console.log(nums.slice(0, write))

    return write
};
