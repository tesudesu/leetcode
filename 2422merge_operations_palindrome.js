// https://leetcode.com/problems/merge-operations-to-turn-array-into-a-palindrome/

var minimumOperations = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    let ans = 0;

    while (left <= right) {
        if (nums[left] === nums[right]) {
            left++;
            right--;
        } else {
            let leftSum = nums[left];
            let rightSum = nums[right];
            left++;
            right--;

            while (left <= right && leftSum !== rightSum) {
                if (leftSum > rightSum) {
                    rightSum += nums[right];
                    right--;
                } else {
                    leftSum += nums[left];
                    left++;
                }
                ans++;
            }

            if (left > right && leftSum !== rightSum) {
                ans++;
            }
        }
    }

    return ans;
};