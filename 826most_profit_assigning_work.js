// https://leetcode.com/problems/most-profit-assigning-work/

var maxProfitAssignment = function(difficulty, profit, worker) {
    let combined = difficulty.map((e, i) => [e, profit[i]]);
    combined.sort((a, b) => a[0] - b[0]);

    worker.sort((a, b) => a - b);

    let tot = 0;
    let max = 0;
    let j = 0;

    for (let i = 0; i < worker.length; i++) {
        while (j < combined.length && combined[j][0] <= worker[i]) {
            max = Math.max(max, combined[j][1]);
            j++;
        }
        tot += max;
    }

    return tot;
};


var maxProfitAssignment = function(difficulty, profit, worker) {
    const maxDifficulty = Math.max(...worker);
    const maxProfits = Array(maxDifficulty + 1).fill(0);

    for (let i = 0; i < difficulty.length; i++) {
        if (difficulty[i] <= maxDifficulty) {
            maxProfits[difficulty[i]] = Math.max(maxProfits[difficulty[i]], profit[i]);
        }
    }

    let currMax = 0;

    for (let i = 0; i < maxProfits.length; i++) {
        currMax = Math.max(currMax, maxProfits[i]);
        maxProfits[i] = currMax;
    }

    let tot = 0;

    for (let i = 0; i < worker.length; i++) {
        tot += maxProfits[worker[i]];
    }

    return tot;
};