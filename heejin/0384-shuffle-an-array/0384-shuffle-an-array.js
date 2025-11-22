/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
    this.original = [...nums];
    this.array = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.array = [...this.original];
    return this.array;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const n = this.array.length;
    const indices = Array.from({length: n}, (_, i) => i);
    
    for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
    }
    
    this.array = indices.map(i => this.original[i]);
    return this.array;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */