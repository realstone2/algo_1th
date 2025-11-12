/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = nums.slice();
    this.array = nums.slice();
};

/**
 * Resets the array to its original configuration and returns it.
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.array = this.original.slice();
    return this.array;
};

/**
 * Returns a random shuffling of the array using the Fisher-Yates algorithm.
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const n = this.array.length;
    
    for (let i = n - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        [this.array[i], this.array[j]] = [this.array[j], this.array[i]];
    }
    
    return this.array;
};