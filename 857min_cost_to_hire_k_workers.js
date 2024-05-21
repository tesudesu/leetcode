// https://leetcode.com/problems/minimum-cost-to-hire-k-workers/

var mincostToHireWorkers = function(quality, wage, k) {
    let ratios = quality.map((e, i) => [wage[i]/quality[i], quality[i]]);

    ratios.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] < b[1] ? -1 : 1;
        }
    })

    const maxQueue = new MaxPriorityQueue();

    let totQuality = 0;
    let maxRatio;
    let i = 0;

    while (maxQueue.size() < k) {
        maxQueue.enqueue(ratios[i][1]);
        totQuality += ratios[i][1];
        maxRatio = ratios[i][0];
        i++;
    }

    let minCost = totQuality * maxRatio;

    for (let i = k; i < ratios.length; i++) {
        const [currRatio, currQuality] = ratios[i];
        if (currQuality < maxQueue.front()) {
            totQuality = totQuality - maxQueue.dequeue() + currQuality;
            maxRatio = currRatio;
            minCost = Math.min(minCost, totQuality * maxRatio);
            maxQueue.enqueue(currQuality);
        }
    }

    return minCost;
};