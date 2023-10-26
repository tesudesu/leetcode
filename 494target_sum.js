// https://leetcode.com/problems/target-sum/

var findTargetSumWays = function (nums, target) {
    let cache = {};

    const dfs = (i, sum) => {
        if (i === nums.length) {
            if (sum === target) {
                return 1;
            } else {
                return 0;
            }
        }

        const str = `${i},${sum}`;
        if (cache[str]) {
            return cache[str];
        }

        const ans = dfs(i + 1, sum + nums[i]) + dfs(i + 1, sum - nums[i]);
        cache[str] = ans;
        return ans;
    }

    return dfs(0, 0);
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