// https://leetcode.com/problems/task-scheduler/

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var leastInterval = function(tasks, n) {
    let count = {};
    let nextOk = {};

    for (let i = 0; i < tasks.length; i++) {
        count[tasks[i]] = count[tasks[i]] + 1 || 1;
        if (!nextOk[tasks[i]]) {
            nextOk[tasks[i]] = 0;
        }
    }

    const maxQueue = new MaxPriorityQueue(a => a[0]);

    for (const task in count) {
        maxQueue.enqueue([count[task], task]);
    }

    let time = 0;

    while (maxQueue.size() > 0) {
        let temp = [];
        while (maxQueue.size() > 0 && nextOk[maxQueue.front()[1]] > time) {
            const combo = maxQueue.dequeue();
            temp.push(combo);
        }
        if (maxQueue.size() !== 0) {
            let [num, task] = maxQueue.dequeue();
            num--;
            if (num !== 0) {
                maxQueue.enqueue([num, task]);
                nextOk[task] = time + n + 1;
            }
        }
        for (let i = 0; i < temp.length; i++) {
            maxQueue.enqueue(temp[i]);
        }
        time++;
    }

    return time;
};