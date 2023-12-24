// https://leetcode.com/problems/divide-array-into-arrays-with-max-difference/

var divideArray = function(nums, k) {
    nums.sort((a, b) => a - b);
    let ans = [];
    let curr = [];

    for (let i = 0; i < nums.length; i++) {
        if (curr.length === 0 || nums[i] - curr[0] <= k) {
            curr.push(nums[i]);
        } else {
            return [];
        }

        if (curr.length === 3) {
            ans.push(curr);
            curr = [];
        }
    }

    return ans;
};