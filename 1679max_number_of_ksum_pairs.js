// https://leetcode.com/problems/max-number-of-k-sum-pairs/

var maxOperations = function(nums, k) {
    nums.sort((a, b) => a - b);

    let tot = 0;

    let start = 0;
    let end = nums.length - 1;

    while (start < end) {
        const sum = nums[start] + nums[end];
        if (sum === k) {
            start++;
            end--;
            tot++;
        } else if (sum < k) {
            start++;
        } else {
            end--;
        }
    }

    return tot;
};