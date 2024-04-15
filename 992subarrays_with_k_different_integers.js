// https://leetcode.com/problems/subarrays-with-k-different-integers/

var subarraysWithKDistinct = function(nums, k) {
    let left = 0;
    let leftBound = 0;
    let tot = 0;
    const count = new Map();

    for (let i = 0; i < nums.length; i++) {
        count.set(nums[i], (count.get(nums[i]) + 1) || 1);

        if (count.size > k) {
            while (count.size > k) {
                count.set(nums[left], count.get(nums[left]) - 1);
                if (count.get(nums[left]) === 0) {
                    count.delete(nums[left]);
                }
                left++;
            }
            leftBound = left;
        } 

        while (count.get(nums[left]) > 1) {
            count.set(nums[left], count.get(nums[left]) - 1);
            left++;
        }

        if (count.size === k) {
            tot += left - leftBound + 1;
        }
    }

    return tot;
};