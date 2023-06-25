// https://leetcode.com/problems/contains-duplicate-ii/

var containsNearbyDuplicate = function(nums, k) {
    if (k === 0) return false;

    let set = new Set();
    let num = k;

    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true;
        if (num > 0) {
            set.add(nums[i]);
            num--;
        } else {
            set.delete(nums[i-k]);
            set.add(nums[i]);
        }
    }

    return false;
};