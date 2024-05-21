// https://leetcode.com/problems/maximize-happiness-of-selected-children/

var maximumHappinessSum = function(happiness, k) {
    happiness.sort((a, b) => b - a);

    let turn = 0;
    let tot = 0;

    for (let i = 0; i < happiness.length; i++) {
        if (k > 0) {
            tot += Math.max(0, happiness[i] - turn);
        } else {
            break;
        }

        turn++;
        k--;
    }

    return tot;
};


var maximumHappinessSum = function(happiness, k) {
    const maxQueue = new MaxPriorityQueue();

    for (let i = 0; i < happiness.length; i++) {
        maxQueue.enqueue(happiness[i]);
    }

    let tot = 0;

    for (let i = 0; i < k; i++) {
        tot += Math.max(maxQueue.dequeue().element - i, 0);
    }
    
    return tot;
};