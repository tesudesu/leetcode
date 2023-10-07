// https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/

var maximumTripletValue = function(nums) {
    let ans = 0;
    let max = nums[0];
    let min = nums[0];

    let greatestAfter = Array(nums.length).fill(0);
    greatestAfter[greatestAfter.length - 1] = nums[nums.length - 1];

    for (let i = nums.length - 2; i >= 0; i--) {
        greatestAfter[i] = Math.max(nums[i], greatestAfter[i + 1]);
    }

    for (let i = 1; i < nums.length; i++) {
        if (max - min > 0) {
            ans = Math.max(ans, greatestAfter[i] * (max - min));
        }
        if (nums[i] > max) {
            max = nums[i];
            min = Infinity;
        } else if (nums[i] < min) {
            min = nums[i];
        } 
    }

    return ans;
};