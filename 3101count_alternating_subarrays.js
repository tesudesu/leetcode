// https://leetcode.com/problems/count-alternating-subarrays/

var countAlternatingSubarrays = function(nums) {
    let tot = 1;

    let left = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            left = i;
        }
        tot += i - left + 1;
    }

    return tot;
};