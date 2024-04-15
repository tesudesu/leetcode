// https://leetcode.com/problems/find-all-duplicates-in-an-array/

var findDuplicates = function(nums) {
    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        const num = Math.abs(nums[i]) - 1;
        if (nums[num] < 0) {
            ans.push(num + 1);
        } else {
            nums[num] *= -1;
        }
    }

    return ans;
};