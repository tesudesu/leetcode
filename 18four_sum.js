// https://leetcode.com/problems/4sum

var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);

    let ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) continue;
        for (let j = i + 1; j < nums.length; j++) {
            if (j !== i + 1 && nums[j] === nums[j - 1]) continue
            let left = j + 1;
            let right = nums.length - 1;
            while (left < right) {
                let sum = nums[i] + nums[j] + nums[left] + nums[right];
                if (sum === target) {
                    ans.push([nums[i], nums[j], nums[left], nums[right]]);
                    left++;
                    while (nums[left] === nums[left - 1]) {
                        left++;
                    }
                } else if (sum > target) {
                    right--;
                    while (nums[right] === nums[right + 1]) {
                        right--;
                    }
                } else {
                    left++;
                    while (nums[left] === nums[left - 1]) {
                        left++;
                    }
                }
            }
        }
    }

    return ans;
};