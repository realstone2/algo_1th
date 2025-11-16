/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    // 이 집을 포함한 최고 값과 이 집 이전까지의 최고 값을 비교한다
    // 왜냐? 인접한 집은 털 수 없음
    let 이전누적 = 0;
    let 전전누적 = 0;
    let idx = 0;

    while (idx < nums.length) {
        const current = nums[idx]

        const 털기 = 전전누적 + current;
        const 안털기 = 이전누적;

        // 둘 중에 뭐가 큰가요?
        const 이번최대누적 = Math.max(안털기, 털기)

        전전누적 = 이전누적; // 이동했으니 이전누적 넣어주기
        이전누적 = 이번최대누적;

        idx++
    }
    
    return 이전누적;
};