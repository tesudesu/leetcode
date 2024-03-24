// https://leetcode.com/problems/number-of-subsequences-that-satisfy-the-given-sum-condition/

var numSubseq = function(nums, target) {
    nums.sort((a, b) => a - b);
    const mod = 1e9 + 7;

    const power = Array(nums.length).fill();
    power[0] = 1;
    for (let i = 1; i < power.length; i++) {
        power[i] = (power[i - 1] * 2) % mod;
    }

    let ans = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (nums[left] + nums[right] <= target) {
            ans += power[right - left];
            ans %= mod;
            left++;
        } else {
            right--;
        }
    }

    return ans;
};