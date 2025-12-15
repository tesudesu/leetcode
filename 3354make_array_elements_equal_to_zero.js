// https://leetcode.com/problems/make-array-elements-equal-to-zero/

var countValidSelections = function(nums) {
    let totSum = 0;

    for (let i = 0; i < nums.length; i++) {
        totSum += nums[i];
    }

    let leftSum = 0;

    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            let rightSum = totSum - leftSum;
            if (leftSum === rightSum) {
                ans += 2;
            } else if (Math.abs(leftSum - rightSum) === 1) {
                ans++;
            }
        } else {
            leftSum += nums[i];
        }
    }

    return ans;
};