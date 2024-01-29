// https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/

var minimumCost = function(nums) {
    let ans = nums[0];
    nums[0] = Infinity;
    nums.sort((a, b) => a - b);

    return ans + nums[0] + nums[1];
};


// var minimumCost = function(nums) {
//     let min = Infinity;

//     const dfs = (i, divide, sum) => {
//         if (divide === 3) {
//             min = Math.min(min, sum);
//             return;
//         }

//         if (i >= nums.length) {
//             return;
//         }

//         // divide here
//         dfs(i + 1, divide + 1, sum + nums[i]);

//         // don't divide here
//         dfs(i + 1, divide, sum);
//     }

//     dfs(1, 1, 0);

//     return min + nums[0];
// };