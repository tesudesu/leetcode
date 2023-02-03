// https://leetcode.com/problems/remove-element/

var removeElement = function(nums, val) {
    let ind = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== val) {
            nums[ind] = nums[i];
            ind++;
        }
    }
    return ind;
};