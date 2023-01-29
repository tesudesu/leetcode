// https://leetcode.com/problems/arranging-coins/

var arrangeCoins = function(n) {
    let coin = 1;
    let rows = 0;
    while (n > 0) {
        n = n - coin;
        coin++;
        rows++;
    }
    if (n < 0) {
        rows--;
    }
    return rows;
};