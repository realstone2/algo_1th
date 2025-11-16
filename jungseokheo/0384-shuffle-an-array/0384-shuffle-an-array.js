/**
 * @param {number[]} nums
 */
const Solution = function(nums) {
    this.origin = [...nums];
    this.current = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.current = [...this.origin];
    return this.current;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    const result = [...this.current];

    for (let i = result.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));

        [result[i], result[j]] = [result[j], result[i]];
    }

    return result;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */

const solution = new Solution([1, 2, 3, 4, 5]);
console.log(solution.shuffle()); // 섞인 배열
console.log(solution.shuffle()); // 다르게 섞인 배열
console.log(solution.reset());   // [1, 2, 3, 4, 5]