// https://leetcode.com/problems/find-k-pairs-with-smallest-sums/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var kSmallestPairs = function(nums1, nums2, k) {
    let minQueue = new MinPriorityQueue(a => a[0]);
    let visited = new Set();
    let ans = [[nums1[0], nums2[0]]];
    if (k === 1 || (nums1.length === 1 && nums2.length === 1)) return ans;

    if (nums1.length > 1) {
        minQueue.enqueue([nums1[1] + nums2[0], 1, 0]);
        visited.add('1,0');
    }
    if (nums2.length > 1) {
        minQueue.enqueue([nums1[0] + nums2[1], 0, 1]);
        visited.add('0,1');
    }

    while (k - 1 > 0 && minQueue.size() > 0) {
        const [, x, y] = minQueue.dequeue();
        ans.push([nums1[x], nums2[y]]);
        if (y + 1 < nums2.length && !visited.has(`${x},${y+1}`)) {
            minQueue.enqueue([nums1[x] + nums2[y + 1], x, y + 1]);
            visited.add(`${x},${y+1}`);
        }
        if (x + 1 < nums1.length && !visited.has(`${x+1},${y}`)) {
            minQueue.enqueue([nums1[x + 1] + nums2[y], x + 1, y]);
            visited.add(`${x+1},${y}`);
        }
        k--;
    }

    return ans;
};