// https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/

var findIndices = function(nums, indexDifference, valueDifference) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + indexDifference; j < nums.length; j++) {
            if (Math.abs(nums[i] - nums[j]) >= valueDifference) {
                return [i, j];
            }
        }
    }

    return [-1, -1];
};