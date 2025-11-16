/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.origin = [...nums];
    this.value = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.value = [...this.origin];
    return this.value
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for (let i = this.value.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [this.value[i], this.value[j]] = [this.value[j], this.value[i]];
    }  

  return this.value
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */