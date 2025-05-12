// https://leetcode.com/problems/count-subarrays-of-length-three-with-a-condition/

var countSubarrays = function(nums) {
    let tot = 0;

    for (let i = 1; i < nums.length - 1; i++) {
        if (nums[i] === 2 * (nums[i - 1] + nums[i + 1])) {
            tot++;
        }
    }

    return tot;
};