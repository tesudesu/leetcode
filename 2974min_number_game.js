// https://leetcode.com/problems/minimum-number-game/

var numberGame = function(nums) {
    nums.sort((a, b) => a - b);
    let ans = Array(nums.length).fill();
    let j = 0;
    for (let i = 1; i < nums.length; i += 2) {
        ans[j++] = nums[i];
        ans[j++] = nums[i - 1];
    }
    return ans;
};