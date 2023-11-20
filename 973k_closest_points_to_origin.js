// https://leetcode.com/problems/k-closest-points-to-origin/

// Sorting, O(nlogn) time

var kClosest = function(points, k) {
    let mapped = points.map(a => [a, Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2))]);

    mapped.sort((a, b) => a[1] - b[1]);

    let ans = [];

    for (let i = 0; i < k; i++) {
        ans.push(mapped[i][0]);
    }

    return ans;
};


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

// Min heap, O(n) heapify, O(klogn) time overall

var kClosest = function(points, k) {
    let mapped = points.map(a => [a, Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2))]);

    const minQueue = MinPriorityQueue.fromArray(mapped, a => a[1]);

    let ans = [];

    for (let i = 0; i < k; i++) {
        ans.push(minQueue.dequeue()[0]);
    }

    return ans;
};