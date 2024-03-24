// https://leetcode.com/problems/most-frequent-ids/

var mostFrequentIDs = function(nums, freq) {
    const maxQueue = new MaxPriorityQueue({priority: a => a[1]});

    const ans = Array(nums.length).fill(0);

    const count = new Map();

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        const frequency = freq[i];

        count.set(num, (count.get(num) + frequency) || frequency);
        if (count.get(num) <= 0) {
            count.delete(num);
        } else {
            maxQueue.enqueue([num, count.get(num)]);
        }

        if (count.size === 0) {
            continue;
        }

        while (count.get(maxQueue.front().element[0]) !== maxQueue.front().element[1]) {
            maxQueue.dequeue();
        }

        ans[i] = maxQueue.front().element[1];
    }

    return ans;
};