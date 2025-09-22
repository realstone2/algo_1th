function intersect(nums1: number[], nums2: number[]): number[] {
    const 맵1 = new Map();
    const 맵2 = new Map();
    const 답 = [];

    // 배열 1 원소의 갯수 카운트
    for (let num of nums1){
        맵1.set(num, (맵1.get(num) || 0) + 1)
    } 

    // 배열 2 원소의 갯수를 카운트하면서, 둘 중 작은 값을 Map에 남김
    for (let num of nums2) {
        맵2.set(num, (맵2.get(num) || 0 ) + 1)
    }
    
    // 두 Map중 작은 value만큼 key 값을 배열에 추가하기.
    for (let [num, count] of 맵1) {
        if (맵2.has(num)) {

            // 작은 value = 반복횟수
            const 반복횟수 = Math.min(맵1.get(num), 맵2.get(num))
            답.push(...Array(반복횟수).fill(num))
        }
    }

    return 답
};

/** 조건
    두 배열의 교집합 return
    같은 숫자라도 겹치는 만큼 추가해줘야함
 */

/** 시간 복잡도
    1000이면,, O^2해도 백만이네? 걍 2중 for문 써도 될듯?
 */

/** 구현
    1. 브루트포스
        2중 for문으로 겹치는 만큼 직접 세기?
        근데 겹치는 건 어떻게 해야할까.
    2. Map쓰기
        1. 배열 1 원소의 갯수 카운트
        2. 배열 2 원소의 갯수를 카운트
        3. 두 Map중 작은 value만큼 key 값을 배열에 추가하기.
 */