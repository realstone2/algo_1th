/**
 * @param {number[]} nums
 */
var Solution = function(nums) {
    this.original = [...nums]
    this.modify = [...nums]
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    this.modify = [...this.original]
    return this.modify
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function() {
    // 순회하면서 한번만 동작
    for (let i = this.modify.length - 1; i > 0; i--) {
      // 0부터 i까지 중 랜덤 인덱스 선택
      const j = Math.floor(Math.random() * (i + 1));
      
      // 두 인덱스 교체하기
      [this.modify[i], this.modify[j]] = [this.modify[j], this.modify[i]];
    }
    
    return this.modify;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */