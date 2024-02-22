// https://leetcode.com/problems/ant-on-the-boundary/

var returnToBoundaryCount = function(nums) {
    let count = 0;
    let curr = 0;

    for (let i = 0; i < nums.length; i++) {
        curr += nums[i];
        if (curr === 0) {
            count++;
        }
    }

    return count;
};