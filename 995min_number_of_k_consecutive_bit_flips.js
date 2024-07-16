// https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/

var minKBitFlips = function(nums, k) {
    const queue = new Queue();
    let ans = 0;
    
    for (let i = 0; i < nums.length; i++) {
        while (queue.size() > 0 && i >= queue.front() + k) {
            queue.dequeue();
        }

        let isFlipped = false;
        if (queue.size() % 2 === 1) {
            isFlipped = true;
        }

        if (nums[i] === 0 && isFlipped || nums[i] === 1 && !isFlipped) {
            continue;
        }

        if (i + k > nums.length) {
            return -1;
        }

        queue.enqueue(i);
        ans++;
    }

    return ans;
};