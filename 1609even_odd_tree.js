// https://leetcode.com/problems/even-odd-tree/

const { Queue } = require('@datastructures-js/queue');

var isEvenOddTree = function(root) {
    let level = 0;
    const queue = new Queue();
    queue.enqueue(root);

    while (!queue.isEmpty()) {
        const length = queue.size();
        let nums = [];
        for (let i = 0; i < length; i++) {
            const curr = queue.dequeue();
            if (level % 2 === 0 && curr.val % 2 === 0) {
                return false;
            } else if (level % 2 !== 0 && curr.val % 2 !== 0) {
                return false;
            }
            nums.push(curr.val);
            if (curr.left) {
                queue.enqueue(curr.left);
            }
            if (curr.right) {
                queue.enqueue(curr.right);
            }
        }
        if (level % 2 === 0 && !isStrictlyIncreasing(nums)) {
            return false;
        } else if (level % 2 !== 0 && !isStrictlyDecreasing(nums)) {
            return false;
        }
        level++;
    }

    return true;
};

const isStrictlyIncreasing = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            return false;
        }
    }
    return true;
}

const isStrictlyDecreasing = (arr) => {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] >= arr[i - 1]) {
            return false;
        }
    }
    return true;
}