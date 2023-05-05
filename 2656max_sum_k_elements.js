// https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/

var maximizeSum = function(nums, k) {
    let sum = Math.max(...nums) * k;
    for (let i = 0; i < k; i++) {
        sum += i;
    }
    return sum;
};