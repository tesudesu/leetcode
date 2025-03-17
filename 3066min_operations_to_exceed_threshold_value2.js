// https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-ii/

var minOperations = function(nums, k) {
    const minQueue = new MinPriorityQueue();

    for (let i = 0; i < nums.length; i++) {
        minQueue.enqueue(nums[i]);
    }

    let tot = 0;

    while (minQueue.front().element < k) {
        let one = minQueue.dequeue().element;
        let two = minQueue.dequeue().element;
        minQueue.enqueue(one * 2 + two);
        tot++;
    }

    return tot;
};