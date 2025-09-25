function twoSum(nums: number[], target: number): number[] {
    // for (let i = 0; i < nums.length; i++){
    //     for (let j = i+1; j < nums.length; j++){
    //         if (nums[i] + nums[j] === target) return [i, j]
    //     }
    // }

    const 맵 = new Map();

    for (let i = 0; i < nums.length; i++){
        const 더하면_타겟되는_수 = target - nums[i];

        if(맵.has(더하면_타겟되는_수)) return [맵.get(더하면_타겟되는_수), i];

        맵.set(nums[i], i)
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
    걍 브루트포스로 풀었음
 */

/** 클로드한테 물어봄
    1. map에 지금까지 본 숫자들 모두 기록
    2. 지금까지 본 숫자들 중 지금의 값과 합쳤을때 target과 일치한다면 return
 */