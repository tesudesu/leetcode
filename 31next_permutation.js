// https://leetcode.com/problems/next-permutation/

var nextPermutation = function (nums) {
    for (let i = nums.length - 2; i >= 0; i--) {
        if (nums[i] < nums[i + 1]) {
            let minValue = 101;
            let minIndex = -1;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] <= minValue && nums[j] > nums[i]) {
                    minValue = nums[j];
                    minIndex = j;
                }
            }
            if (minIndex !== -1) {
                let temp = nums[minIndex];
                nums[minIndex] = nums[i];
                nums[i] = temp;
            }
            let left = i + 1;
            let right = nums.length - 1;
            
            while (left < right) {
                let temp = nums[left];
                nums[left] = nums[right];
                nums[right] = temp;
                left++;
                right--;
            }
            return nums;
        }
    }

    return nums.sort((a, b) => a - b);
};