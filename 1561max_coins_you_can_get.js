// https://leetcode.com/problems/maximum-number-of-coins-you-can-get/

var maxCoins = function(piles) {
    piles.sort((a, b) => b - a);

    let tot = 0;

    let bob = piles.length - 1;

    for (let i = 1; i < bob; i += 2) {
        tot += piles[i];
        bob--;
    } 

    return tot;
};