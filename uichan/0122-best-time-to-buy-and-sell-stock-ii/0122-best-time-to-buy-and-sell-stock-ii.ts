function maxProfit(prices: number[]): number {
    let profit = 0;

    for (let i = 0; i < prices.length - 1; i++){
        if (prices[i] < prices[i+1]){
            profit += prices[i+1] - prices[i]
        }
    }

    return profit
};

/** 조건
 그냥 젤 싸게 사서 비싸게 판다.
 이게 산 날에 동시에 팔 수 있기 때문에
 prices = [1,2,3,4,5]
 에서 1일차에 사고 5일차에 파나, 1일차에 사고 2일차에 팔고 다시 사고 3일차에 팔고 다시 사고
 이렇게 해도 똑같음
 */

/** 시간 복잡도
 최대 312면 걍 널널하네.
 */

/** 구현 방식
 그냥 사고 팔고 하면 안되나?
 1. 현재 칸에서 다음 칸을 확인, 싸면 사지말고, 비싸면 사.
 2. 산 상태에서 넘어왔으면 팔아.
 3. 반복
 */