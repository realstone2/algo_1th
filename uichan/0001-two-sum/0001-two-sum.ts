function twoSum(nums: number[], target: number): number[] {
    for (let i = 0; i < nums.length; i++){
        for (let j = i+1; j < nums.length; j++){
            if (nums[i] + nums[j] === target) return [i, j]
        }
    }
};

/** 조건
target값이 나오는 index return하기
무조건 값이 1개 있다. 중복된 index는 반환 불가
n^2보다 낮은 시간복잡도로 구현할 수 있니?
 */
 
/** 시간복잡도
10^4면 사실 2중for문으로 돌리면 되는데,, 이거보다 낮은거 없을까?
 */

/** 구현
 */

/** 트러블슈팅
 */