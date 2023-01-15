// https://leetcode.com/problems/search-insert-position/

var searchInsert = function(nums, target) {
    if (nums.indexOf(target) >= 0) {
        return nums.indexOf(target);
    } else {
        let ind = 0;
        for (let i = 0; i < nums.length; i++) {
            if (target > nums[i]) {
                ind = i + 1;
            }
        }
        return ind;
    }
};
