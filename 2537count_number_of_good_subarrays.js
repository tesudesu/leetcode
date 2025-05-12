// https://leetcode.com/problems/count-the-number-of-good-subarrays/

var countGood = function(nums, k) {
    const count = new Map();

    let left = 0;
    let currPairs = 0;
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) + 1) || 1);
        currPairs += count.get(nums[i]) - 1;
        
        while (currPairs >= k) {
            ans += nums.length - i;
            count.set(nums[left], count.get(nums[left]) - 1);
            currPairs -= count.get(nums[left]);
            if (count.get(nums[left]) === 0) {
                count.delete(nums[left]);
            }
            left++;
        }
    }

    return ans;
};