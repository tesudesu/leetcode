// https://leetcode.com/problems/maximum-average-subarray-i/

var findMaxAverage = function(nums, k) {
    let prevtotal = 0;
    for (let i = 0; i < k; i++) {
        prevtotal += nums[i];
    }
    let max = prevtotal;
    for (let i = 1; i <= nums.length-k; i++) {
        let currTotal = prevtotal + nums[i+k-1] - nums[i-1];
        if (currTotal > max) {
            max = currTotal;
        }
        prevtotal = currTotal;
    }
    return max/k;
};