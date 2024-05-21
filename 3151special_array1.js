// https://leetcode.com/problems/special-array-i/

var isArraySpecial = function(nums) {
    let lastEven = nums[0] % 2 === 0 ? 1 : -1;
    
    for (let i = 1; i < nums.length; i++) {
        if (lastEven === 1) {
            if (nums[i] % 2 === 0) {
                return false;
            }
        } else {
            if (nums[i] % 2 === 1) {
                return false;
            }
        }
        lastEven *= -1;
    }

    return true;
};