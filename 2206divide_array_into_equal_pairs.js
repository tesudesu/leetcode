// https://leetcode.com/problems/divide-array-into-equal-pairs/

var divideArray = function(nums) {
    const count = Array(501).fill(0);

    for (let i = 0; i < nums.length; i++) {
        count[nums[i]]++;
    }

    for (let i = 1; i < count.length; i++) {
        if (count[i] % 2 !== 0) {
            return false;
        }
    }

    return true;
};