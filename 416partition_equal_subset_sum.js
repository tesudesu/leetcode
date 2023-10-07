// https://leetcode.com/problems/partition-equal-subset-sum/

// DP

var canPartition = function (nums) {
    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        tot += nums[i];
    }

    if (tot % 2 !== 0) return false;

    const target = tot / 2;

    let dp = Array(nums.length).fill().map(() => Array(target + 1).fill(false));
    dp[0][0] = true;
    if (nums[0] <= target) {
        dp[0][nums[0]] = true;
    }
    
    for (let i = 1; i < dp.length; i++) {
        for (let j = 1; j < dp[0].length; j++) {
            if (dp[i - 1][j] || dp[i - 1][j - nums[i]]) {
                dp[i][j] = true;
            }
        }
        if (dp[i][dp[0].length - 1]) return true;
    }

    return false;
};


// var canPartition = function(nums) {
//     let tot = 0;

//     for (let i = 0; i < nums.length; i++) {
//         tot += nums[i];
//     }

//     if (tot % 2 !== 0) return false;

//     const target = tot / 2;

//     const sums = new Set();

//     for (let i = 0; i < nums.length; i++) {
//         const set = [...sums];
//         for (let j = 0; j < set.length; j++) {
//             const sum = nums[i] + set[j];
//             if (sum === target) return true;
//             if (sum < target) {
//                 sums.add(nums[i] + set[j]);
//             }
//         }
//         if (nums[i] === target) return true;
//         sums.add(nums[i]);
//     }

//     return false;
// };


// Memoization

// var canPartition = function(nums) {
//     let tot = 0;

//     for (let i = 0; i < nums.length; i++) {
//         tot += nums[i];
//     }

//     if (tot % 2 !== 0) return false;

//     const target = tot / 2;

//     let cache = Array(nums.length).fill().map(() => Array(target + 1).fill(null));

//     const search = (tot, ind) => {
//         if (tot === target) {
//             return true;
//         }
//         if (tot > target || ind >= nums.length) return false;
//         if (cache[ind][tot] !== null) {
//             return cache[ind][tot];
//         }
//         const res = search(tot + nums[ind], ind + 1) || search(tot, ind + 1);
//         cache[ind][tot] = res;
//         return res;
//     }

//     search(0, 0);

//     return cache[0][0];
// };


// Brute force

// var canPartition = function(nums) {
//     let tot = 0;

//     for (let i = 0; i < nums.length; i++) {
//         tot += nums[i];
//     }

//     if (tot % 2 !== 0) return false;

//     const target = tot / 2;

//     let ans = false;

//     const backtrack = (tot, ind) => {
//         if (tot === target) {
//             ans = true;
//             return;
//         }
//         if (tot > target) return;
//         for (let i = ind; i < nums.length; i++) {
//             backtrack(tot + nums[i], i + 1);
//         }
//     }

//     backtrack(0, 0);

//     return ans;
// };