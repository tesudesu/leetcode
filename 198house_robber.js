// https://leetcode.com/problems/house-robber/

// Bottom-up DP

var rob = function(nums) {
    if (nums.length === 1) return nums[0];
    
    const dp = Array(nums.length).fill();
    dp[0] = nums[0];
    dp[1] = Math.max(nums[1], nums[0]);

    for (let i = 2; i < dp.length; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
    }

    return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
};


// Top-down DP

var rob = function(nums) {
    const cache = Array(nums.length).fill(-1);

    const dp = (i) => {
        if (i >= nums.length) {
            return 0;
        }

        if (cache[i] !== -1) return cache[i];

        // rob current
        const rob = nums[i] + dp(i + 2);

        // not rob
        const notRob = dp(i + 1);

        const ans = Math.max(rob, notRob);
        cache[i] = ans;

        return ans;
    }

    return dp(0);
};


// var rob = function(nums) {
//     let one = nums[nums.length - 1];
//     let two = 0;

//     for (let i = nums.length - 2; i >= 0; i--) {
//         const temp = two;
//         two = one;
//         one = Math.max(two, nums[i] + temp);
//     }

//     return one;
// };


// var rob = function(nums) {
//     let dp = Array(nums.length).fill(0);
//     dp[dp.length - 1] = nums[nums.length - 1];

//     for (let i = dp.length - 2; i >= 0; i--) {
//         dp[i] = Math.max(dp[i + 1], nums[i] + (dp[i + 2] || 0));
//     }

//     return dp[0];
// };


// var rob = function(nums) {
//     let one = 0;
//     let two = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         const temp = two;
//         two = Math.max(two, nums[i] + one);
//         one = temp;
//     }

//     return Math.max(one, two);
// };


// var rob = function(nums) {
//     let dp = [0, nums[0]];

//     for (let i = 1; i < nums.length; i++) {
//         dp.push(Math.max(dp[dp.length - 1], nums[i] + dp[dp.length - 2]));
//     }

//     return Math.max(dp[dp.length - 1], dp[dp.length - 2]);
// };