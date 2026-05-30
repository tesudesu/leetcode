// https://leetcode.com/problems/sliding-window-maximum/

var maxSlidingWindow = function (nums, k) {
    const count = new Map();
    const maxQueue = new MaxPriorityQueue();

    for (let i = 0; i < k; i++) {
        maxQueue.enqueue(nums[i]);
        count.set(nums[i], (count.get(nums[i]) + 1) || 1);
    }

    let ans = [];
    ans.push(maxQueue.front());
    
    let left = 0;

    for (let i = k; i < nums.length; i++) {
        count.set(nums[left], count.get(nums[left]) - 1);
        if (count.get(nums[left]) === 0) {
            count.delete(nums[left]);
        }

        while (maxQueue.size() > 0 && !count.has(maxQueue.front())) {
            maxQueue.dequeue();
        }

        count.set(nums[i], (count.get(nums[i]) + 1) || 1);
        maxQueue.enqueue(nums[i]);
        ans.push(maxQueue.front());
        left++;
    }

    return ans;
};