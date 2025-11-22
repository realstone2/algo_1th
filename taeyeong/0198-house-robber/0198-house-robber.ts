// 이 문제는 "이 집을 털까 말까?" 를 매번 고민하는 문제라고 한다.
// 집 i를 털면 -> 바로 앞집(i-1)은 못 털어
// 집 i를 안 털면 -> i-1까지의 최대 금액을 그대로 가져올 수 있어.

// 근데 이게 시간 계산식처럼 생각을 해야해서 i를 털면 이전 집, 다음 집은 못 털어가 아니라 이미 지나 온 앞집은 못 턴다고 생각해야하는 것.

// i번째까지의 최대 금액 = max( i-1번째까지의 최대 금액,  i-2번째까지의 최대 금액 + 현재집 돈 )



function rob(nums: number[]): number {
    if(nums.length === 0) return 0;

    if(nums.length === 1) return nums[0];

    // dp 배열 준비
    let dp: number[] = new Array(nums.length).fill(0);

    // 기본값 채우기 (i = 0, 1)
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1]);

    // i = 2부터 끝까지 점화식 적용
    for (let i = 2; i < nums.length; i++) {
        dp[i] = Math.max(
            dp[i - 1],
            dp[i - 2] + nums[i]
        )
    }

    return dp[nums.length - 1];
};