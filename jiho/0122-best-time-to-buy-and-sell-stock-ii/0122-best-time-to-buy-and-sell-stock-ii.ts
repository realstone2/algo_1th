function maxProfit(prices: number[]): number {
    let totalProfit = 0
    let maxProfit = 0

    for(let i = 0; i < prices.length -1 ; i++) {
        const current = prices[i]
        const next = prices[i+1]
        const profit = next - current

        if( profit > maxProfit) {
            maxProfit = profit
            totalProfit += maxProfit
            maxProfit = 0
        }
    }

    return totalProfit
};