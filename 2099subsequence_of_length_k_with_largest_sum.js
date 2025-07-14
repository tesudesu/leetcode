// https://leetcode.com/problems/find-subsequence-of-length-k-with-the-largest-sum/

var maxSubsequence = function(nums, k) {
    let sorted = nums.toSorted((a, b) => b - a);

    let count = new Map();

    for (let i = 0; i < k; i++) {
        count.set(sorted[i], (count.get(sorted[i]) + 1) || 1);
    }

    let ans = [];
    let i = 0; 

    while (k > 0) {
        if (count.has(nums[i])) {
            ans.push(nums[i]);
            count.set(nums[i], count.get(nums[i]) - 1);
            if (count.get(nums[i]) === 0) {
                count.delete(nums[i]);
            }
            k--;
        }
        i++;
    }

    return ans;
};