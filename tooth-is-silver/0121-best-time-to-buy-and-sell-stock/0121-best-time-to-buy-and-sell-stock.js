/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 1) return 0;

    // 7,1,5,3,6,4
    // 포인터를 하나 두고 하나씩 이동하면서
    // 포인터 이후의 오른쪽 값 중에 큰 값이 있는지 확인하고 변수에 넣는다
    // 변수에 넣을때 이전 변수보다 작으면 변수에 넣지 않음
    // 마지막까지 모두 다 돈다음에 변수에 저장된 값을 반환 -> 그럼 가장 큰 값이 반환됨

    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        minPrice = Math.min(minPrice, price);
        maxProfit = Math.max(maxProfit, price - minPrice);
    }

    return maxProfit;
};