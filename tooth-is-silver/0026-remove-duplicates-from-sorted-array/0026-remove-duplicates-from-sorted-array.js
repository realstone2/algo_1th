/**
 * @param {number[]} nums
 * @return {number}
 */
    // output의 형태를 이해하지 못해서 한참을 해멤
    // 영어 지문 해석이 너무 안됌... 번역기 돌리고보니 중복되는 숫자를 제거해서 유효한 숫자만 배열로 반환하는 줄 알았는데 그게 아니었음 ㅠ new Set으로 계속 하다가 output이 안맞아서 다시 시도
    // nums를 받아서 앞과 뒤가 중복이 되는 숫자인지 확인
var removeDuplicates = function(nums) {
    let result = 0; // return할 숫자의 갯수 인덱스 0부터 시작
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== nums[result]) { // 새로운 값인가요?
            result++ // result 증가
            nums[result] = nums[i] // nums를 활용하여 해당 위치에 저장
        }
        // 아니면 다음으로 넘어감
    }
    return result + 1; // 인덱스라서 + 1이 총 갯수
};