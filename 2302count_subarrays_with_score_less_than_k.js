// https://leetcode.com/problems/count-subarrays-with-score-less-than-k/

var countSubarrays = function(nums, k) {
    let tot = 0;

    let left = 0;
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
        while (left <= i && sum * (i - left + 1) >= k) {
            sum -= nums[left];
            left++;
        }
        tot += i - left + 1;
    }

    return tot;
};