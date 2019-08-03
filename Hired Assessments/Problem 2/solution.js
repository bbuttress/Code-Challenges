
const solution = (prices) => {
    if (prices.length < 2) {
        return 0;
    }
    
    let minPrice = prices[0];
    let currProfit = 0;
    let maxProfit = prices[1] - prices[0];
    
    for (let i = 1; i < prices.length; i++) {
        currProfit = prices[i] - minPrice;
        maxProfit = Math.max(maxProfit, currProfit);
        minPrice = Math.min(minPrice, prices[i]);
    }
    
    return maxProfit;
};
