// https://leetcode.com/problems/house-robber-ii/

var rob = function (nums) {
    if (nums.length <= 3) {
        return Math.max(...nums);
    }

    let dp1 = Array(nums.length).fill(0);
    dp1[dp1.length - 2] = nums[nums.length - 2];

    for (let i = dp1.length - 3; i >= 0; i--) {
        dp1[i] = Math.max(dp1[i + 1], nums[i] + (dp1[i + 2] || 0));
    }

    let dp2 = Array(nums.length).fill(0);
    dp2[dp2.length - 1] = nums[nums.length - 1];

    for (let i = dp2.length - 2; i >= 1; i--) {
        dp2[i] = Math.max(dp2[i + 1], nums[i] + (dp2[i + 2] || 0));
    }

    return Math.max(dp1[0], dp2[1]);
};