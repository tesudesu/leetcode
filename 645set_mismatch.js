// https://leetcode.com/problems/set-mismatch/

var findErrorNums = function(nums) {
    nums.sort((a,b) => a-b);
    let duplicate = 0;
    for (let i = 0; i < nums.length-1; i++) {
        if (nums[i] == nums[i+1]) {
            duplicate = nums[i];
            break;
        }
    }
    let totalShould = 0;
    for (let i = 1; i <= nums.length; i++) {
        totalShould += i;
    }
    let totalActual = 0;
    for (let i = 0; i < nums.length; i++) {
        totalActual += nums[i];
    }
    return [duplicate, totalShould - (totalActual - duplicate)];
};