// https://leetcode.com/problems/take-gifts-from-the-richest-pile/

var pickGifts = function(gifts, k) {
    for (let i = 1; i <= k; i++) {
        gifts.sort((a,b) => b-a);
        gifts[0] = Math.floor(Math.sqrt(gifts[0]));
    }
    
    let total = 0
    for (let i = 0; i < gifts.length; i++) {
        total += gifts[i];
    }
    return total;
};