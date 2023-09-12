// https://leetcode.com/problems/minimum-number-of-taps-to-open-to-water-a-garden/

var minTaps = function (n, ranges) {
    ranges = ranges.map((val, i) => {
        let lower = i - val;
        let upper = i + val;
        if (lower < 0) lower = 0;
        if (upper > n) upper = n;
        return [lower, upper];
    });

    ranges.sort((a, b) => a[0] - b[0]);

    if (ranges[0][0] !== 0) return -1;

    let tot = 0;

    let last = 0;
    let tempLast = 0;

    for (let i = 0; i < ranges.length; i++) {
        if (ranges[i][0] <= last) {
            tempLast = Math.max(tempLast, ranges[i][1]);
        } else if (ranges[i][0] > tempLast) {
            return -1;
        } else if (ranges[i][0] > last) {
            tot++;
            last = tempLast;
            if (last === n) return tot;
            tempLast = Math.max(tempLast, ranges[i][1]);
        }
    }

    if (tempLast === n) {
        return tot + 1;
    } else {
        return -1;
    }
};


// var minTaps = function (n, ranges) {
//     let dp = Array(n + 1).fill(Infinity);

//     dp[0] = 0;

//     for (let i = 0; i < ranges.length; i++) {
//         let lower = i - ranges[i];
//         if (lower < 0) lower = 0;
//         let higher = i + ranges[i];
//         if (higher > n) higher = n;

//         for (let j = lower; j <= higher; j++) {
//             dp[higher] = Math.min(dp[higher], dp[j] + 1);
//         }
//     }

//     return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1];
// };