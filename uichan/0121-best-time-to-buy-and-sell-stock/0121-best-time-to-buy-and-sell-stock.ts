function maxProfit(prices) {
    let 최소가격 = 100000;
    let 최대이익 = 0;
    
    for (let price of prices) {
        최소가격 = Math.min(최소가격, price);
        최대이익 = Math.max(최대이익, price - 최소가격);
    }
    
    return 최대이익;
}

/** 조건
 최대 이익 구간 찾기
 가장 낮은 가격에 사서 가장 높은 가격에 팔기
 -> 사는 날 < 파는 날
*/