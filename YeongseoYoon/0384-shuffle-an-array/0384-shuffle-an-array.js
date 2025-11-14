/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = nums.slice();
    this.shuffled = nums; 
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.shuffled = this.original.slice();
    return this.shuffled;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for(let i = this.shuffled.length - 1; i>0;i--){
        const j = Math.floor(Math.random() * (i + 1)); 
        [this.shuffled[i], this.shuffled[j]] = [this.shuffled[j], this.shuffled[i]];
    }
    return this.shuffled;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

