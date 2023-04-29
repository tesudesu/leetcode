// https://leetcode.com/problems/calculate-delayed-arrival-time/

var findDelayedArrivalTime = function(arrivalTime, delayedTime) {
    return (arrivalTime + delayedTime) % 24;
};