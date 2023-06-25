// https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

var removeDuplicates = function (nums) {
    if (nums.length === 1) return 1;

    let p = 2;

    for (let i = 2; i < nums.length; i++) {
        if (nums[i] !== nums[p-2]) {
            nums[p] = nums[i];
            p++;
        }
    }

    return p;
};