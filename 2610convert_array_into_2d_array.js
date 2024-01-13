// https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/

var findMatrix = function(nums) {
    let taken = 0;
    let ans = [];
    
    while (taken < nums.length) {
        let curr = [];
        let currSet = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > 0) {
                if (!currSet.has(nums[i])) {
                    curr.push(nums[i]);
                    currSet.add(nums[i]);
                    nums[i] = 0;
                    taken++;
                }
            }
        }
        ans.push(curr);
    }

    return ans;
};