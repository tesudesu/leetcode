// https://leetcode.com/problems/array-partition/

var arrayPairSum = function(nums) {
    let total = 0;
    nums.sort((a,b) => a-b);
    for (let i = 0; i < nums.length-1; i += 2) {
        total += nums[i];
    }
    return total;
};