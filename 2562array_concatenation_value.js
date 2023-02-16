// https://leetcode.com/problems/find-the-array-concatenation-value/

var findTheArrayConcVal = function(nums) {
    let value = 0;
    while (nums.length > 1) {
        value += Number(nums[0].toString() + nums[nums.length-1].toString());
        nums.pop();
        nums.shift();
    }
    if (nums.length != 0) {
        value += nums[0];
    }
    return value;
};