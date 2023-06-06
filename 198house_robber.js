// https://leetcode.com/problems/house-robber/

var rob = function(nums) {
    let one = 0;
    let two = nums[0];

    for (let i = 1; i < nums.length; i++) {
        const temp = two;
        two = Math.max(two, nums[i] + one);
        one = temp;
    }

    return Math.max(one, two);
};

// var rob = function(nums) {
//     let dp = [0, nums[0]];

//     for (let i = 1; i < nums.length; i++) {
//         dp.push(Math.max(dp[dp.length - 1], nums[i] + dp[dp.length - 2]));
//     }

//     return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
// };