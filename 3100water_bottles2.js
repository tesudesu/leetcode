// https://leetcode.com/problems/water-bottles-ii/

var maxBottlesDrunk = function(numBottles, numExchange) {
    let drank = numBottles;
    let empty = numBottles;

    while (empty >= numExchange) {
        empty -= numExchange;
        numExchange++;
        drank++;
        empty++;
    }
    
    return drank;
};