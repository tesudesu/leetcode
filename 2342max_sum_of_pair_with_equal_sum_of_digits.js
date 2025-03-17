// https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/

var maximumSum = function(nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let sum = 0;
        while (num > 0) {
            sum += num % 10;
            num = Math.floor(num / 10);
        }
        if (map.has(sum)) {
            map.get(sum).enqueue(nums[i]);
        } else {
            let maxQueue = new MaxPriorityQueue();
            maxQueue.enqueue(nums[i]);
            map.set(sum, maxQueue);
        }
    }

    let max = -1;

    for (let [sum, queue] of map) {
        if (queue.size() >= 2) {
            max = Math.max(max, queue.dequeue().element + queue.dequeue().element);
        }
    }

    return max;
};