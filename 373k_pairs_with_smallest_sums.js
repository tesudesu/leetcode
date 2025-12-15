// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var kSmallestPairs = function(nums1, nums2, k) {
    let ans = [];
    const minQueue = new MinPriorityQueue(a => a[0]);

    for (let i = 0; i < nums2.length; i++) {
        minQueue.enqueue([nums1[0] + nums2[i], 0, i]);
    }

    while (k > 0) {
        const [sum, i, j] = minQueue.dequeue();
        ans.push([nums1[i], nums2[j]]);
        if (i + 1 < nums1.length) {
            minQueue.enqueue([nums1[i + 1] + nums2[j], i + 1, j]);
        }
        k--;
    }

    return ans;
};