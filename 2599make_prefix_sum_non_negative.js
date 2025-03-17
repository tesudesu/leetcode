// https://leetcode.com/problems/make-the-prefix-sum-non-negative/

var makePrefSumNonNegative = function(nums) {
    let tot = 0;

    let sum = 0;

    let minQueue = new MinPriorityQueue();

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        minQueue.enqueue(nums[i]);
        if (sum < 0) {
            tot++;
            min = minQueue.dequeue().element;
            sum -= min;
        }
    }

    return tot;
};