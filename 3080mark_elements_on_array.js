// https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/

const { PriorityQueue } = require('@datastructures-js/priority-queue');

var unmarkedSumArray = function(nums, queries) {
    const queue = new PriorityQueue((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] < b[1] ? -1 : 1;
        }
    })

    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        queue.enqueue([nums[i], i]);
        tot += nums[i];
    }

    let ans = Array(queries.length).fill();

    const marked = new Set();

    for (let i = 0; i < queries.length; i++) {
        if (tot === 0) {
            ans[i] = 0;
            continue;
        }

        const [index, k] = queries[i];
        if (!marked.has(index)) {
            tot -= nums[index];
            marked.add(index);
        }
        for (let j = 0; j < k; j++) {
            if (tot === 0) break;
            while (marked.has(queue.front()[1])) {
                queue.dequeue();
            }
            const [num, ind] = queue.dequeue();
            marked.add(ind);
            tot -= num;
        }

        ans[i] = tot;
    }

    return ans;
};