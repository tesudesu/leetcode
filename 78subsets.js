// https://leetcode.com/problems/subsets/

var subsets = function(nums) {
    let ans = [];

    const backtrack = (currArr, ind) => {
        if (currArr.length > nums.length) return;
        ans.push(currArr.slice());
        for (let i = ind; i < nums.length; i++) {
            currArr.push(nums[i]);
            backtrack(currArr, i + 1);
            currArr.pop();
        }
    }

    backtrack([], 0);

    return ans;
};