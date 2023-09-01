// https://leetcode.com/problems/minimum-replacements-to-sort-the-array/

var minimumReplacement = function(nums) {
    let tot = 0;

    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] > nums[i + 1]) {
            if (nums[i] % nums[i + 1] === 0) {
                tot += (nums[i] / nums[i + 1]) - 1;
                nums[i] = nums[i + 1];
            } else {
                const add = Math.floor(nums[i] / nums[i + 1]);
                tot += add;
                nums[i] = Math.floor(nums[i] / (add + 1));
            }
        }
    }

    return tot;
};