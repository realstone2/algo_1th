function maxProfit(prices: number[]): number {
    let max = 0
    let min = prices[0]

    for(const price of prices) {
        const profit = price - min

        max = Math.max(profit, max)
        if(min > price) min = price

    }
    
    return max
};