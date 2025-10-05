/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
    nums.sort(function (a, b){
        // 걍 0이면 무조건 뒤로 보낸다.
        if (a === 0) {
            return 1
        }
        if (b === 0){
            return -1
        }
        // 다른 값들은 놔둔다
        return 0
    })
};

/** 조건
    숫자를 정렬하고, 0은 맨 뒤로 보낸다.
    -> 정렬이 아니고 걍 0만 맨 뒤로 보내는거네;;
 */

/** 시간복잡도
    10^4 = 10000
    O^2까지는 가능
 */

/** 구현
    걍 sort만 잘 써도 될듯?
 */