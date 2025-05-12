// https://leetcode.com/problems/count-complete-subarrays-in-an-array/

var countCompleteSubarrays = function(nums) {
    let totDistinct = new Set(nums).size;

    let count = new Map();
    let left = 0;
    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) + 1) || 1);

        while (count.size >= totDistinct) {
            tot += nums.length - i;
            count.set(nums[left], count.get(nums[left]) - 1);
            if (count.get(nums[left]) === 0) {
                count.delete(nums[left]);
            }
            left++;
        }
    }

    return tot;
};