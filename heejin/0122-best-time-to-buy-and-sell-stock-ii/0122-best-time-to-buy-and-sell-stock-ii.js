/**
 * @param {number[]} prices
 * @return {number}
 */
 
 //모든 상승 구간에서 매수-매도를 반복하면 최대 이익

const maxProfit = (prices) => {
  let sum = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      sum += prices[i] - prices[i - 1];
    }
  }
  return sum;
};