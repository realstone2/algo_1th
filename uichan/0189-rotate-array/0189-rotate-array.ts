/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    if (nums.length < k) k = k % nums.length
    if (nums.length < 1 || k === 0) return

    const answer = []
    for (let i = nums.length - k; i < nums.length; i++){
        console.log
        answer.push(nums[i])
    }
    for (let i = 0; i < nums.length - k; i++){
        answer.push(nums[i])
    }
    nums.splice(0, nums.length, ...answer)
};

/** 조건
 그냥 배열 이동시키기
*/

/** 시간 복잡도
    10^5
    일단 shift unshift는 무조건 터질듯?
    shift unshift는 O(n^2), 터짐(아래 표 참조)
*/

/** 입력크기 별 시간 복잡도(참조)
    n ≤ 10      → 뭐든지 OK (O(n!), O(2^n))
    n ≤ 20      → O(2^n), O(n!)
    n ≤ 500     → O(n³)
    n ≤ 5,000   → O(n²)
    n ≤ 10^5    → O(n log n)
    n ≤ 10^6    → O(n) 또는 O(n log n)
    n ≤ 10^7    → O(n)
    n ≥ 10^8    → O(log n), O(1)
*/

/** 구현
배열 전체를 이동시키는 것 보다 더 좋은 방법이 있을 것 같은데
-> 빈 배열을 두고, 값에 따라서 하나씩 복사하기. 단일 for문으로도 될듯.
1. 빈 배열 생성
2. nums.length - k부터 nums.length까지 빈배열에 push
3. 그 다음 0부터 nums.length - k까지 push 
4. 배열 = nums 교체
 */

/** 엣지케이스 처리
1. k가 0이거나, length가 1보다 작을 때 -> return
2. 회전해야하니까, length < k일 경우, k = k%length

 */