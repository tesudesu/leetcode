// https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/

const { MaxPriorityQueue, MinPriorityQueue } = require('@datastructures-js/priority-queue');

var longestSubarray = function (nums, limit) {
    const count = new Map();
    let longest = 1;
    let left = 0;
    const maxQueue = new MaxPriorityQueue();
    const minQueue = new MinPriorityQueue();

    for (let i = 0; i < nums.length; i++) {
        maxQueue.enqueue(nums[i]);
        minQueue.enqueue(nums[i]);
        count.set(nums[i], (count.get(nums[i]) + 1) || 1);
        while (maxQueue.front().element - minQueue.front().element > limit) {
            count.set(nums[left], count.get(nums[left]) - 1);
            if (count.get(nums[left]) === 0) {
                count.delete(nums[left]);
            }

            if (nums[left] === maxQueue.front().element) {
                maxQueue.dequeue();
                while (!count.has(maxQueue.front().element)) {
                    maxQueue.dequeue();
                }
            } else if (nums[left] === minQueue.front().element) {
                minQueue.dequeue();
                while (!count.has(minQueue.front().element)) {
                    minQueue.dequeue();
                }
            }

            left++;
        }
        longest = Math.max(longest, i - left + 1);
    }

    return longest;
};


// Using pop(), shift() to simulate deque

var longestSubarray = function (nums, limit) {
    let longest = 1;
    let left = 0;
    let maxDeque = [];
    let minDeque = [];

    for (let i = 0; i < nums.length; i++) {
        while (maxDeque.length > 0 && maxDeque[maxDeque.length - 1] < nums[i]) {
            maxDeque.pop();
        }
        maxDeque.push(nums[i]);

        while (minDeque.length > 0 && minDeque[minDeque.length - 1] > nums[i]) {
            minDeque.pop();
        }
        minDeque.push(nums[i]);

        while (maxDeque[0] - minDeque[0] > limit) {
            if (maxDeque[0] === nums[left]) {
                maxDeque.shift();
            } else if (minDeque[0] === nums[left]) {
                minDeque.shift();
            }
            left++;
        }

        longest = Math.max(longest, i - left + 1);
    }

    return longest;
};