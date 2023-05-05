// https://leetcode.com/problems/sign-of-the-product-of-an-array/

var arraySign = function(nums) {
    let neg = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            return 0;
        } else if (nums[i] < 0) {
            neg++;
        }
    }
    return neg % 2 === 0 ? 1 : -1;
};