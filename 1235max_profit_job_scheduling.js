// https://leetcode.com/problems/maximum-profit-in-job-scheduling/

// Top down DP

var jobScheduling = function(startTime, endTime, profit) {
    const times = Array(startTime.length).fill();

    for (let i = 0; i < startTime.length; i++) {
        times[i] = [startTime[i], endTime[i], profit[i]];
    }

    times.sort((a, b) => a[0] - b[0]);

    const cache = Array(times.length).fill(-1);

    const dp = (i) => {
        if (i >= times.length) {
            return 0;
        }

        if (cache[i] !== -1) {
            return cache[i];
        }

        // skip
        const skip = dp(i + 1);

        // take

        // binary search
        let start = i + 1;
        let end = times.length - 1;
        let index = times.length;

        while (start <= end) {
            const mid = start + Math.floor((end - start) / 2);

            if (times[mid][0] < times[i][1]) {
                start = mid + 1;
            } else {
                index = mid;
                end = mid - 1;
            }
        }

        const take = times[i][2] + dp(index);

        const res = Math.max(skip, take);

        cache[i] = res;

        return res;
    }

    return dp(0);
};


// Bottom up DP

var jobScheduling = function(startTime, endTime, profit) {
    const times = Array(startTime.length).fill();

    for (let i = 0; i < startTime.length; i++) {
        times[i] = [startTime[i], endTime[i], profit[i]];
    }

    times.sort((a, b) => a[0] - b[0]);

    const dp = Array(times.length + 1).fill(0);
    
    for (let i = times.length - 1; i >= 0; i--) {
        let start = i + 1;
        let end = times.length - 1;
        let index = times.length;

        while (start <= end) {
            const mid = start + Math.floor((end - start) / 2);

            if (times[mid][0] < times[i][1]) {
                start = mid + 1;
            } else {
                index = mid;
                end = mid - 1;
            }
        }

        dp[i] = Math.max(dp[i + 1], times[i][2] + dp[index]);
    }

    return dp[0];
};


// Possible chains

const { MinPriorityQueue } = require('@datastructures-js/priority-queue');

var jobScheduling = function(startTime, endTime, profit) {
    const times = Array(startTime.length).fill();

    for (let i = 0; i < startTime.length; i++) {
        times[i] = [startTime[i], endTime[i], profit[i]];
    }

    times.sort((a, b) => a[0] - b[0]);

    let maxProfit = 0;

    const minQueue = new MinPriorityQueue(a => a[0]);
    minQueue.enqueue([0, 0]);

    for (let i = 0; i < times.length; i++) {
        while (!minQueue.isEmpty() && minQueue.front()[0] <= times[i][0]) {
            const [endTime, profit] = minQueue.dequeue();
            maxProfit = Math.max(maxProfit, profit);
        }

        minQueue.enqueue([times[i][1], maxProfit + times[i][2]]);
    }

    while (!minQueue.isEmpty()) {
        maxProfit = Math.max(maxProfit, minQueue.dequeue()[1]);
    }

    return maxProfit;
};