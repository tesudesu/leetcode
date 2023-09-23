// https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/

var minimumRightShifts = function(nums) {
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < nums[i - 1]) {
            if (nums[nums.length - 1] > nums[0]) return -1;
            for (let j = i + 1; j < nums.length; j++) {
                if (nums[j] < nums[j - 1]) return -1;
            }
            return nums.length - i;
        }
    }

    return 0;
};