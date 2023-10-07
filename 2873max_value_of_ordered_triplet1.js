// https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-i/

var maximumTripletValue = function(nums) {
    let ans = 0;

    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let k = j + 1; k < nums.length; k++) {
                ans = Math.max(ans, (nums[i] - nums[j]) * nums[k]);
            }
        }
    }

    return ans;
};