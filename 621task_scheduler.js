// https://leetcode.com/problems/task-scheduler/

const { MaxPriorityQueue } = require('@datastructures-js/priority-queue');

var leastInterval = function(tasks, n) {
    const maxQueue = new MaxPriorityQueue();

    const counts = Array(26).fill(0);

    for (let i = 0; i < tasks.length; i++) {
        counts[tasks[i].charCodeAt(0) - 65]++;
    }

    for (let i = 0; i < 26; i++) {
        if (counts[i] > 0) {
            maxQueue.enqueue(counts[i]);
        }
    }

    let time = 0;

    while (!maxQueue.isEmpty()) {
        let put = 0;
        let taken = [];
        while (!maxQueue.isEmpty() && put <= n) {
            let curr = maxQueue.dequeue();
            curr--;
            if (curr > 0) {
                taken.push(curr);
            }
            put++;
        }
        for (let i = 0; i < taken.length; i++) {
            maxQueue.enqueue(taken[i]);
        }
        if (maxQueue.isEmpty()) {
            time += put;
        } else {
            time += n + 1;
        }
    }

    return time;
};


var leastInterval = function(tasks, n) {
    const counts = Array(26).fill(0);
    let max = 0;

    for (let i = 0; i < tasks.length; i++) {
        counts[tasks[i].charCodeAt(0) - 65]++;
        max = Math.max(max, counts[tasks[i].charCodeAt(0) - 65]);
    }

    let maxCount = 0;

    for (let i = 0; i < counts.length; i++) {
        if (counts[i] === max) {
            maxCount++;
        }
    }

    let time = (max - 1) * (n + 1) + 1;

    time += (maxCount - 1);

    return Math.max(time, tasks.length);
};


// var leastInterval = function(tasks, n) {
//     let count = {};
//     let nextOk = {};

//     for (let i = 0; i < tasks.length; i++) {
//         count[tasks[i]] = count[tasks[i]] + 1 || 1;
//         if (!nextOk[tasks[i]]) {
//             nextOk[tasks[i]] = 0;
//         }
//     }

//     const maxQueue = new MaxPriorityQueue(a => a[0]);

//     for (const task in count) {
//         maxQueue.enqueue([count[task], task]);
//     }

//     let time = 0;

//     while (maxQueue.size() > 0) {
//         let temp = [];
//         while (maxQueue.size() > 0 && nextOk[maxQueue.front()[1]] > time) {
//             const combo = maxQueue.dequeue();
//             temp.push(combo);
//         }
//         if (maxQueue.size() !== 0) {
//             let [num, task] = maxQueue.dequeue();
//             num--;
//             if (num !== 0) {
//                 maxQueue.enqueue([num, task]);
//                 nextOk[task] = time + n + 1;
//             }
//         }
//         for (let i = 0; i < temp.length; i++) {
//             maxQueue.enqueue(temp[i]);
//         }
//         time++;
//     }

//     return time;
// };