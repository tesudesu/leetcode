// https://leetcode.com/problems/two-best-non-overlapping-events/

var maxTwoEvents = function(events) {
    events.sort((a, b) => b[2] - a[2]);

    let max = 0;

    for (let i = 0; i < Math.min(events.length, 10); i++) {
        let currMax = events[i][2];
        for (let j = i + 1; j < events.length; j++) {
            if (events[j][0] > events[i][1] || events[j][1] < events[i][0]) {
                currMax += events[j][2];
                break;
            }
        }
        max = Math.max(max, currMax);
    }

    return max;
};


var maxTwoEvents = function(events) {
    events.sort((a, b) => a[0] - b[0]);

    const nextNonoverlapping = (i) => {
        let start = i + 1;
        let end = events.length - 1;
        let ans = events.length;
        
        while (start <= end) {
            const mid = Math.floor((end - start) / 2) + start;

            if (events[mid][0] > events[i][1]) {
                ans = mid;
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        return ans;
    }

    const cache = Array(2).fill().map(() => Array(events.length).fill(-1));

    const dp = (times, i) => {
        if (times === 2 || i === events.length) {
            return 0;
        } 

        if (cache[times][i] !== -1) {
            return cache[times][i];
        }

        const notake = dp(times, i + 1);
        const nextInterval = nextNonoverlapping(i);
        const take = events[i][2] + dp(times + 1, nextInterval);

        const ans = Math.max(notake, take);

        cache[times][i] = ans;

        return ans;
    }

    return dp(0, 0);
};


var maxTwoEvents = function(events) {
    let times = [];

    for (let i = 0; i < events.length; i++) {
        times.push([events[i][0], 0, events[i][2]]);
        times.push([events[i][1], 1, events[i][2]]);
    }

    times.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] - b[1];
        }
    });

    let ans = 0;
    let maxValue = 0;

    for (let i = 0; i < times.length; i++) {
        if (times[i][1] === 0) { // start time
            ans = Math.max(ans, maxValue + times[i][2]);
        } else { // end time
            maxValue = Math.max(maxValue, times[i][2]);
        }
    }

    return ans;
};