function maxProfit(prices: number[]): number {
  let answer = 0;

  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      answer += prices[i + 1] - prices[i];
    }
  }

  return answer;
};