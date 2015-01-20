/*
Say you have an array for which the ith element is the price of a given stock on day i.
If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock),
design an algorithm to find the maximum profit.
*/

var q3 = (function() {
    return {
        exec: function() {
            return maxProfit(input.prices);
        }
    };

    function maxProfit(prices) {
        if (typeof prices === 'undefined' || prices === null || prices.length < 2) {
            return 0;
        }

        var priceDiffs = [];

        for (var i = 0; i < prices.length - 1; i++) {
            priceDiffs[i] = prices[i + 1] - prices[i];
        }

        var currentDiff = 0,
            maxDiff = 0;

        for (var k = 0; k < priceDiffs.length; k++) {
            currentDiff += priceDiffs[k];
            if (currentDiff < 0) {
                currentDiff = 0;
            }
            if (currentDiff > maxDiff) {
                maxDiff = currentDiff;
            }
        }

        return maxDiff;
    }
}());
