function singleNumber(nums: number[]): number {
    const 맵 = new Map();
    for (let num of nums){
        맵.set(num, (맵.get(num) || 0) + 1)
    }

    for (let [num, count] of 맵){
        if (count === 1) return num
    }
};

/** 조건
1. 2개 있는 값을 찾기
 */

/** 시간 복잡도
3 * 10^4면,, 2중 for문은 n^2니까 9*10^8 -> 81억번, 대충 1초에 10억번 연산한다고 치면 무조건 터짐
중간에 break해서 넘어가게 해도 81억/2 = 45억번인데 이래도 터진다

2중 for문을 안쓰면 어떻게 풀 수 있을까?
map쓰면 될거같은데
 */

/** 구현
배열 순회하면서, map에 {배열 값: 등장 횟수} 기록
등장횟수 1인 값 출력
 */