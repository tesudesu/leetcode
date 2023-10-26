// https://leetcode.com/problems/constrained-subsequence-sum/

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var constrainedSubsetSum = function(nums, k) {
    let dp = [...nums];
    let max = nums[0];

    const maxQueue = new MaxPriorityQueue({ priority: a => a[0] });
    maxQueue.enqueue([nums[0], 0]);

    for (let i = 1; i < dp.length; i++) {
        while (maxQueue.front().element[1] < i - k) {
            maxQueue.dequeue().element;
        }

        dp[i] = Math.max(dp[i], nums[i] + maxQueue.front().element[0]);

        maxQueue.enqueue([dp[i], i]);
        max = Math.max(max, dp[i]);
    }

    return max;
};