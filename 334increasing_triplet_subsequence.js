// https://leetcode.com/problems/increasing-triplet-subsequence/

var increasingTriplet = function(nums) {
    if (nums.length < 3) return false;

    let one = nums[0];
    let two = Infinity;

    let one2 = null;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > two) return true;

        if (one2 !== null) {
            if (nums[i] > one2) {
                one = one2;
                two = nums[i];
                one2 = null;
                continue;
            }
        }

        if (nums[i] > one && nums[i] < two) {
            two = nums[i];
        } else if (nums[i] > one) {
            two = nums[i];
        } else if (nums[i] < one) {
            one2 = nums[i];
        }
    }
    return false;
};