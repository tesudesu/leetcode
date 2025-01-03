// https://leetcode.com/problems/maximum-average-pass-ratio/

var maxAverageRatio = function(classes, extraStudents) {
    const maxQueue = new MaxPriorityQueue({priority: a => a[0]});

    for (let i = 0; i < classes.length; i++) {
        let diff = ((classes[i][0] + 1) / (classes[i][1] + 1)) - ((classes[i][0]) / (classes[i][1]));
        maxQueue.enqueue([diff, classes[i][0] + 1, classes[i][1] + 1, i]);
    }

    while (extraStudents > 0) {
        const [diff, num, den, index] = maxQueue.dequeue().element;
        classes[index][0]++;
        classes[index][1]++;
        let newdiff = ((num + 1) / (den + 1)) - (num / den);
        maxQueue.enqueue([newdiff, num + 1, den + 1, index]);
        extraStudents--;
    }

    let tot = 0;

    for (let i = 0; i < classes.length; i++) {
        tot += classes[i][0] / classes[i][1];
    }

    return tot / classes.length;
};