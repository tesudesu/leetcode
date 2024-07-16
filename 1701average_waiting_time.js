// https://leetcode.com/problems/average-waiting-time/

var averageWaitingTime = function(customers) {
    let wait = 0;
    let currTime = customers[0][0];

    for (const [startTime, duration] of customers) {
        wait += duration + Math.max(currTime - startTime, 0);
        currTime = Math.max(currTime + duration, startTime + duration);
    }

    return wait / customers.length;
};