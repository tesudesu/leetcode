// https://leetcode.com/problems/maximum-subsequence-score/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var maxScore = function(nums1, nums2, k) {
    const merged = nums2.map((val, i) => [val, nums1[i]]);

    merged.sort((a, b) => b[0] - a[0]);

    let sum = 0;

    let nums1Group = new MinPriorityQueue();

    for (let i = 0; i < k; i++) {
        sum += merged[i][1];
        nums1Group.enqueue(merged[i][1]);
    }

    let max = sum * merged[k - 1][0];

    for (let i = k; i < merged.length; i++) {
        const currMin = nums1Group.dequeue();
        if (merged[i][1] > currMin) {
            nums1Group.enqueue(merged[i][1]);
            sum = sum - currMin + merged[i][1];
            max = Math.max(max, sum * merged[i][0]);
        } else {
            nums1Group.enqueue(currMin);
        }
    }

    return max;
};