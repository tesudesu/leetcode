// https://leetcode.com/problems/target-sum/

var findTargetSumWays = function(nums, target) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    if (target > sum || target < -sum) return 0;

    const dp = Array(nums.length).fill().map(() => Array(sum * 2 + 1).fill(0));
    dp[0][sum + nums[0]] = 1;
    dp[0][sum - nums[0]] += 1;

    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < sum * 2 + 1; j++) {
            if (dp[i - 1][j] > 0) {
                dp[i][j + nums[i]] += dp[i - 1][j];
                dp[i][j - nums[i]] += dp[i - 1][j];
            }
        }
    }

    return dp[nums.length - 1][target + sum];
};


var findTargetSumWays = function(nums, target) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    if (target > sum || target < -sum) return 0;

    let dp = Array(sum * 2 + 1).fill(0);
    dp[sum + nums[0]] = 1;
    dp[sum - nums[0]] += 1;

    for (let i = 1; i < nums.length; i++) {
        const newLevel = Array(sum * 2 + 1).fill(0);
        for (let j = 0; j < sum * 2 + 1; j++) {
            if (dp[j] > 0) {
                newLevel[j + nums[i]] += dp[j]
                newLevel[j - nums[i]] += dp[j]
            }
        }
        dp = newLevel;
    }

    return dp[target + sum];
};


var findTargetSumWays = function(nums, target) {
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    const cache = Array(nums.length).fill().map(() => Array(sum * 2 + 1).fill(-1));
    
    const dp = (i, tot) => {
        if (i === nums.length) {
            if (tot === target) {
                return 1;
            } else {
                return 0;
            }
        }

        if (cache[i][tot + sum] !== -1) {
            return cache[i][tot + sum];
        }

        const ans = dp(i + 1, tot + nums[i]) + dp(i + 1, tot - nums[i]);
        cache[i][tot + sum] = ans;

        return ans;
    }

    return dp(0, 0);
};


// var findTargetSumWays = function(nums, target) {
//     let ways = 0;

//     const dfs = (i, sum) => {
//         if (i === nums.length) {
//             if (sum === target) {
//                 ways++;
//             }
//             return;
//         }

//         dfs(i + 1, sum + nums[i]);
//         dfs(i + 1, sum - nums[i]);
//     }

//     dfs(0, 0);

//     return ways;
// };