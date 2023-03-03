// https://leetcode.com/problems/left-and-right-sum-differences/

var leftRigthDifference = function(nums) {
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        let left = 0;
        let right = 0;
        for (let j = 0; j < i; j++) {
            left += nums[j];
        }
        for (let j = i+1; j < nums.length; j++) {
            right += nums[j];
        }
        res.push(Math.abs(left-right));
    }
    return res;
};