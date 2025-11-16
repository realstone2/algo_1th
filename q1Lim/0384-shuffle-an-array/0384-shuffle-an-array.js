/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = [...nums]
    this.nums = [...nums]
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    const copyOriginal = [...this.original]
    return copyOriginal
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const numsArr = [...this.nums]

    for (let i = numsArr.length -1 ; i > 0 ; i--){
        const randomIndex = Math.floor(Math.random() * (i + 1));
        [numsArr[i], numsArr[randomIndex]] = [numsArr[randomIndex], numsArr[i]];
    }
    return numsArr;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */