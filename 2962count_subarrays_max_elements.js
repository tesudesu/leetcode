// https://leetcode.com/problems/count-subarrays-where-max-element-appears-at-least-k-times/

var countSubarrays = function(nums, k) {
    const max = Math.max(...nums);
    let indices = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            indices.push(i);
        }
    }

    let tot = 0;

    for (let i = k - 1; i < indices.length; i++) {
        if (i === indices.length - 1) {
            tot += (indices[i - k + 1] + 1) * (nums.length - indices[i]);
        } else {
            tot += (indices[i - k + 1] + 1) * (indices[i + 1] - indices[i]);
        }
    }

    return tot;
};


var countSubarrays = function(nums, k) {
    const max = Math.max(...nums);
    let count = 0;
    let left = 0;
    let ans = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === max) {
            count++;
        }

        while (count >= k) {
            if (nums[left] === max) {
                count--;
            }
            left++;
        }
        ans += left;
    }

    return ans;
};