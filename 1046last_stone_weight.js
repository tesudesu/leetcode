// https://leetcode.com/problems/last-stone-weight/

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var lastStoneWeight = function(stones) {
    let maxQueue = new MaxPriorityQueue();

    for (let i = 0; i < stones.length; i++) {
        maxQueue.enqueue(stones[i]);
    }

    while (maxQueue.size() > 1) {
        const largest = maxQueue.dequeue();
        const secLargest = maxQueue.dequeue();
        if (largest > secLargest) {
            maxQueue.enqueue(largest - secLargest);
        }
    }

    return maxQueue.size() === 1 ? maxQueue.dequeue() : 0;
};