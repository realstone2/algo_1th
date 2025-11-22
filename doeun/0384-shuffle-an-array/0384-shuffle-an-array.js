/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
  this.original = nums.slice(); // 원본 저장 (복사)
  this.nums = nums.slice();     // 현재 배열 상태
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
  this.nums = this.original.slice(); // 원본 복사로 복원
  return this.nums;
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
  const arr = this.nums.slice();
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // 0 ~ i 사이 랜덤
    [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
  }
  return arr;
};

/** 
 * Example usage:
 * var obj = new Solution([1, 2, 3]);
 * console.log(obj.shuffle()); // 랜덤 순서 예: [3,1,2]
 * console.log(obj.reset());   // [1,2,3]
 * console.log(obj.shuffle()); // 랜덤 순서 예: [2,3,1]
 */
