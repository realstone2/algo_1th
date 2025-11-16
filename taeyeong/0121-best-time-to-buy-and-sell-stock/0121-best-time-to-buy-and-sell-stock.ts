function maxProfit(prices: number[]): number {
  let minPrice = Infinity;   // 지금까지 본 최저 가격
  let maxProfit = 0;         // 최대 이익

  for (let price of prices) {
    // 더 낮은 가격을 발견하면 갱신
    if (price < minPrice) {
      minPrice = price;
    }
    // 현재 가격에서 팔았을 때의 이익 계산
    const profit = price - minPrice;
    // 최대 이익 갱신
    if (profit > maxProfit) {
      maxProfit = profit;
    }
  }

  return maxProfit;
}