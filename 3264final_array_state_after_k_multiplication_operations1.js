// https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/

var getFinalState = function(nums, k, multiplier) {
    const minQueue = new PriorityQueue({compare: (a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] - b[1];
        }
    }});

    for (let i = 0; i < nums.length; i++) {
        minQueue.enqueue([nums[i], i]);
    }

    for (let i = 0; i < k; i++) {
        const [min, index] = minQueue.dequeue();
        const product = min * multiplier;
        nums[index] = product;
        minQueue.enqueue([product, index]);
    }

    return nums;
};