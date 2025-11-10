// 생소하고 불친절한 Example 표기법
// Input
// ["Solution", "shuffle", "reset", "shuffle"]
// [[[1, 2, 3]], [], [], []]
// -> const solution = new Solution([1, 2, 3]) / solution.shuffle() / solution.reset() / solution.shuffle 수행해라.
// 첫번째 배열은 명령어 목록을 뜻함
// 두번째 배열은 각 명령어에 들어갈 인자 리스트를 뜻함
// Output
// [null, [3, 1, 2], [1, 2, 3], [1, 3, 2]]
// 세번째 배열은 명령어에 해당하는 리턴값을 뜻함

/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.originalNums = [...nums]; 
    this.currentNums = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.currentNums = [...this.originalNums];
    return this.currentNums; 
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    for(let i = this.currentNums.length - 1; 0 < i; i--) {
        let randomIndex = Math.floor(Math.random() * (i + 1));
        const temp = this.currentNums[i];
        this.currentNums[i] = this.currentNums[randomIndex];
        this.currentNums[randomIndex] = temp;
    }
    return this.currentNums;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */