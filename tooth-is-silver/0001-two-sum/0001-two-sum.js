/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 첫번째 인덱스 값을 넣고 전체 배열을 순회한다. 그래서 target이 되는지 확인!
    // target이 안되면 다음 인덱스를 넣고 그다음 인덱스부터 순회한다.
    
    // 핵심)
    // 변수 1개를 둔다. 반복문을 돌린다. 대신 변수(index) 이후의 값으로 하나씩 더한 값을 target과 비교한다
    // 두 값을 더한 값이 target이 되면 return;
    for (let i = 0; i < nums.length; i++) {
        const firstNum = nums[i]
        for (let j = i + 1; j < nums.length; j++){
            const secondNum = nums[j]
            if (firstNum + secondNum === target) {
                return [i, j]
            }
        }
    }
};