// https://leetcode.com/problems/maximum-score-of-a-good-subarray/

var maximumScore = function(nums, k) {
    let leftMin = Array(nums.length).fill();
    let rightMin = Array(nums.length).fill();
    leftMin[k] = nums[k];
    rightMin[k] = nums[k];

    for (let i = k - 1; i >= 0; i--) {
        leftMin[i] = Math.min(nums[i], leftMin[i + 1]);
    }

    for (let i = k + 1; i < nums.length; i++) {
        rightMin[i] = Math.min(nums[i], rightMin[i - 1]);
    }

    let score = nums[k];

    for (let i = k - 1; i >= 0; i--) {
        score = Math.max(score, leftMin[i] * (k - i + 1));
    }

    for (let i = k + 1; i < nums.length; i++) {
        score = Math.max(score, rightMin[i] * (i - k + 1));
    }

    let left = 0;
    let right = nums.length - 1;

    while (left <= k - 1 && right >= k + 1) {
        score = Math.max(score, Math.min(leftMin[left], rightMin[right]) * (right - left + 1));
        if (leftMin[left] <= rightMin[right]) {
            left++;
        } else {
            right--;
        }
    }

    return score;
};