// https://leetcode.com/problems/construct-target-array-with-multiple-sums/

var isPossible = function(target) {
    if (target.length === 1) {
        return target[0] === 1;
    }

    const maxQueue = new MaxPriorityQueue();
    let sum = 0;
    for (const t of target) {
        maxQueue.enqueue(t);
        sum += t;
    } 

    while (maxQueue.front() !== 1) {
        const num = maxQueue.dequeue();
        const rest = sum - num;
        if (rest >= num) return false;
        newNum = num % rest;
        if (newNum === 0) {
            newNum = rest;
        }
        maxQueue.enqueue(newNum);
        sum = sum - num + newNum;
    } 

    return true;
};