/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.initial = nums.slice();
    this.current = nums.slice();
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.current = this.initial.slice();
    return this.current;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for(let i = this.current.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [this.current[i], this.current[j]] = [this.current[j], this.current[i]];
    }
    return this.current;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */