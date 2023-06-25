// https://leetcode.com/problems/jump-game/

var canJump = function(nums) {
    if (nums.length === 1) return true;

    let skip = 1;

    for (let i = nums.length - 2; i >= 1; i--) {
        if (nums[i] < skip) {
            skip++;
        } else {
            skip = 1;
        }
    }

    return nums[0] >= skip;
};