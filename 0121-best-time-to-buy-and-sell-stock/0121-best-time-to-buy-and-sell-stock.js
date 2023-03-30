/**
 * @param {number[]} prices
 * @return {number}
 1. create minPrice and maxProfit variables
 2. for loop over prices array
 3. if current element < minPrice, set minPrice = current element
 4. else, set maxProfix = Math.max(maxProfit, curr - minPrice)
 */
var maxProfit = function(prices) {
    let minPrice = prices[0]
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i]
        else maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
    return maxProfit
};