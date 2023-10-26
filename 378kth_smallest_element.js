// https://leetcode.com/problems/kth-smallest-element-in-a-sorted-matrix/

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var kthSmallest = function(matrix, k) {
    const minQueue = new MinPriorityQueue();

    for (let i = 0; i < Math.min(matrix[0].length, k); i++) {
        minQueue.enqueue([matrix[0][i], 0, i]);
    }

    for (let i = 0; i < k - 1; i++) {
        const [val, x, y] = minQueue.dequeue();
        if (x + 1 < matrix.length) {
            minQueue.enqueue([matrix[x + 1][y], x + 1, y]);
        } 
    }

    return minQueue.dequeue()[0];
};