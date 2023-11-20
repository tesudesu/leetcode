// https://leetcode.com/problems/capacity-to-ship-packages-within-d-days/

var shipWithinDays = function(weights, days) {
    let sum = 0;
    let max = 0;

    for (let i = 0; i < weights.length; i++) {
        sum += weights[i];
        max = Math.max(max, weights[i]);
    }

    const isPossible = (cap) => {
        let currCap = 0;
        let daysRequired = 1;
        for (let i = 0; i < weights.length; i++) {
            if (currCap + weights[i] <= cap) {
                currCap += weights[i];
            } else {
                currCap = weights[i];
                daysRequired++;
            }
            if (daysRequired > days) return false;
        }
        return true;
    }

    let start = max;
    let end = sum;

    while (start < end) {
        let mid = Math.floor((end - start) / 2) + start;

        if (isPossible(mid)) {
            res = mid;
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return end;
};


// TLE DP

var shipWithinDays = function(weights, days) {
    const sum = (i, j) => {
        let tot = 0;
        for (let index = i; index < j; index++) {
            tot += weights[index];
        }
        return tot;
    }

    let cache = Array(weights.length).fill().map(() => Array(days + 1).fill(-1));

    const dp = (index, day) => {
        if (day === days) {
            return sum(index, weights.length);
        }
        if (day > days || index >= weights.length) {
            return Infinity;
        }

        if (cache[index][day] !== -1) {
            return cache[index][day];
        }

        let min = Infinity;
        for (let i = index; i < weights.length; i++) {
            let maxCapDay = Math.max(sum(index, i + 1), dp(i + 1, day + 1));
            min = Math.min(maxCapDay, min);
        }

        cache[index][day] = min;

        return min;
    }

    return dp(0, 1);
};