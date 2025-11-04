function maxProfit(prices: number[]): number {
    let max = 0
    let min = prices[0]

    for(const price of prices) {
        // 현재 계산이 가장 최적해가 되는 것. 
        const profit = price - min

        max = Math.max(profit, max)
        if(min > price) min = price

    }
    
    return max
};