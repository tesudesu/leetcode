// https://leetcode.com/problems/maximum-spending-after-buying-items/

var maxSpending = function(values) {
    const days = values.length * values[0].length;
    let tot = 0;
    for (let i = 1; i <= days; i++) {
        let min = Infinity;
        let minIndex;
        for (let j = 0; j < values.length; j++) {
            if (values[j][values[j].length - 1] < min) {
                min = values[j][values[j].length - 1];
                minIndex = j;
            }
        }
        values[minIndex].pop();
        tot += i * min;
    }
    return tot;
};


const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var maxSpending = function(values) {
    const minQueue = new MinPriorityQueue();
    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values[i].length; j++) {
            minQueue.enqueue(values[i][j]);
        }
    }

    let tot = 0;
    let day = 1;
    while (!minQueue.isEmpty()) {
        tot += day * minQueue.dequeue();
        day++;
    }

    return tot;
};