// https://leetcode.com/problems/minimum-number-of-coins-to-be-added/

var minimumAddedCoins = function(coins, target) {
    coins.sort((a, b) => a - b);

    let ans = 0;
    let upperBound = 0;
    let i = 0;

    while (i < coins.length && upperBound < target) {
        if (coins[i] - upperBound > 1) {
            ans++;
            upperBound += upperBound + 1;
        } else {
            upperBound += coins[i];
            i++;
        }
    }

    while (upperBound < target) {
        ans++;
        upperBound += upperBound + 1;
    }

    return ans;
};


var minimumAddedCoins = function(coins, target) {
    coins.sort((a, b) => a - b);

    let ans = 0;
    let upperBound = 0;
    let i = 0;

    while (upperBound < target) {
        if (i >= coins.length || (i < coins.length && coins[i] - upperBound > 1)) {
            ans++;
            upperBound += upperBound + 1;
        } else {
            upperBound += coins[i];
            i++;
        }
    }

    return ans;
};