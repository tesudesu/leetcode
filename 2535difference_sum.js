// https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/

var differenceOfSum = function(nums) {
    let elementSum = 0;
    let digitSum = 0;
    for (let i = 0; i < nums.length; i++) {
        elementSum += nums[i];
        let n = nums[i];
        while (n > 0) {
            digitSum += n % 10;
            n = Math.floor(n/10);
        }
    }
    return Math.abs(elementSum - digitSum);
};