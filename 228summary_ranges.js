// https://leetcode.com/problems/summary-ranges/

var summaryRanges = function(nums) {
    let ans = [];
    let start = nums[0];
    let range = 0;

    for (let i = 1; i <= nums.length; i++) {
        if (nums[i] - nums[i-1] !== 1) {
            if (range === 0) {
                ans.push(String(start));
            } else {
                ans.push(`${start}->${start+range}`);
                range = 0;
            }
            start = nums[i];
        } else {
            range++;
        }
    }

    return ans;
};