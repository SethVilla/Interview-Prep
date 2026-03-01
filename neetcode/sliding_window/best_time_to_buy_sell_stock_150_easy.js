/*
    Steps

    - Initialize
        - l (buy),r (sell), maxProfit
    - while loop
        - exit condition if on last sell date 
        - if buy < sell calculate max profit and move selling date
        - if sell < buy sell becomes the new buy
        - move sell date always

*/


class Solution {

    maxProfit(prices) {
        let l = 0;
        let r = 1
        let maxProfit = 0

        while (r < prices.length) {
            if (prices[l] < prices[r]) {
                maxProfit = Math.max(maxProfit, prices[r] - prices[l])
                r++
            } else {
                l = r
            }
            r++
        }
        return maxProfit
    }
}

console.log(new Solution().maxProfit([10,1,5,6,7,1]), new Solution().maxProfit([10,8,7,5,2]))