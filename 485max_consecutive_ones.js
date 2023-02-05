// https://leetcode.com/problems/max-consecutive-ones/

var findMaxConsecutiveOnes = function(nums) {
    let temp = 0;
    let total = 0;
    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] == 1) {
            temp++;
        } else {
            if (temp > total) {
                total = temp;
            }
            temp = 0;
        }
    }
    return total;
};