// https://leetcode.com/problems/partition-array-for-maximum-sum/

// Top-down DP

var maxSumAfterPartitioning = function(arr, k) {
    const cache = Array(arr.length).fill(-1);

    const dp = (i) => {
        if (i === arr.length) {
            return 0;
        }

        if (cache[i] !== -1) {
            return cache[i];
        }

        let currMax = 0;
        let ans = 0;
        const end = Math.min(i + k, arr.length);

        for (let j = i; j < end; j++) {
            currMax = Math.max(currMax, arr[j]);
            ans = Math.max(ans, currMax * (j - i + 1) + dp(j + 1));
        }

        cache[i] = ans;

        return ans;
    }

    return dp(0);
};


// Bottom-up DP

var maxSumAfterPartitioning = function(arr, k) {
    const dp = Array(arr.length + 1).fill(0);

    for (let i = arr.length - 1; i >= 0; i--) {
        const end = Math.min(arr.length, i + k);
        let currMax = 0;
        for (let j = i; j < end; j++) {
            currMax = Math.max(currMax, arr[j]);
            dp[i] = Math.max(dp[i], currMax * (j - i + 1) + dp[j + 1]);
        }
    }

    return dp[0];
};