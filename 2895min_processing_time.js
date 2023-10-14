// https://leetcode.com/problems/minimum-processing-time/

var minProcessingTime = function(processorTime, tasks) {
    tasks.sort((a, b) => a - b);
    processorTime.sort((a, b) => b - a);

    let tot = 0;

    let j = -1;

    let curr = 0;

    for (let i = 0; i <= tasks.length; i++) {
        if (i % 4 === 0) {
            tot = Math.max(tot, curr);
            j++;
            curr = 0;
        }
        curr = Math.max(curr, processorTime[j] + tasks[i]);
    }

    return tot;
};