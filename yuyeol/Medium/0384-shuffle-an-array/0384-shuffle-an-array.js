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
    // 파라미터의 배열 복제 해서 원본과 변경할 배열의 초기화
    this.originalNums = [...nums]; 
    this.currentNums = [...nums];
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function() {
    // 원본 배열을 복제(참조때문)해서 현재 배열로 교체해줌
    this.currentNums = [...this.originalNums];
    return this.currentNums; 
};

/**
 * @return {number[]}
 */
// 배열 셔플을 어떻게 돌려야하는지 도저히 감이 안와서 방식 찾아봄
// 피셔-예이츠 셔플: 배열의 뒤에서부터 각 자리에 올 요소를 남은 것들 중 무작위로 뽑아 교환하는 방식으로
Solution.prototype.shuffle = function() {
    // 역순 순회함. 랜덤 돌리는 자리수가 하나씩 감소하는 것이 자연스럽기 때문
    for(let i = this.currentNums.length - 1; 0 < i; i--) {
        // randomIndex === i일 수도 있음. 그 순회에서는 자리를 안바꾸는거.
        let randomIndex = Math.floor(Math.random() * (i + 1));
        console.log(i, randomIndex)
        // 랜덤인덱스와 현재 순회 인덱스 자리를 바꿔줌
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