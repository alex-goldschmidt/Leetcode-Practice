/**
 * @param {number[]} prices
 * @return {number}
 1. create minPrice = first array element & maxProfit = 0
 2. for loop
 3. if current element is less than minPrice, set minPrice = current element
 4. else, set maxProfit = current element - minPrice
 5. return maxProfit
 */
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i]
        else maxProfit = Math.max(maxProfit, prices[i] - minPrice)
    }
    return maxProfit
};