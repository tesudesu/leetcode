// https://leetcode.com/problems/water-bottles/

var numWaterBottles = function(numBottles, numExchange) {
    let empty = 0;
    let drank = 0;
    let full = numBottles;

    while (full > 0 || empty >= numExchange) {
        drank += full;
        empty += full;
        full = Math.floor(empty / numExchange);
        empty = empty % numExchange;
    }

    return drank;
};