// https://leetcode.com/problems/minimum-cost-for-tickets/

// Top-down DP

var mincostTickets = function(days, costs) {
    const cache = Array(days.length).fill(-1);
    
    const dp = (i) => {
        if (i === days.length) {
            return 0;
        }

        if (cache[i] !== -1) {
            return cache[i];
        }

        let j = i + 1;

        let buyOneDay = dp(i + 1) + costs[0];

        while (j < days.length && days[j] - days[i] < 7) {
            j++;
        }

        let buy7Day = dp(j) + costs[1];

        while (j < days.length && days[j] - days[i] < 30) {
            j++;
        }

        let buy30Day = dp(j) + costs[2];

        let ans = Math.min(buyOneDay, buy7Day, buy30Day);

        cache[i] = ans;

        return ans;
    }

    return dp(0);
};


// Bottom-up DP

var mincostTickets = function(days, costs) {
    const dp = Array(days.length).fill(0);

    for (let i = days.length - 1; i >= 0; i--) {
        let j = i + 1;

        let buyOneDay = costs[0];
        
        if (i + 1 < days.length) {
            buyOneDay += dp[i + 1];
        }

        while (j < days.length && days[j] - days[i] < 7) {
            j++;
        }

        let buy7Day = costs[1];

        if (j < days.length) {
            buy7Day += dp[j];
        }

        while (j < days.length && days[j] - days[i] < 30) {
            j++;
        }

        let buy30Day = costs[2];

        if (j < days.length) {
            buy30Day += dp[j];
        }

        dp[i] = Math.min(buyOneDay, buy7Day, buy30Day);
    }

    return dp[0];
};