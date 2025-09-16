// https://leetcode.com/problems/count-hills-and-valleys-in-an-array/

var countHillValley = function(nums) {
    let removeDuplicates = [nums[0]];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== removeDuplicates[removeDuplicates.length - 1]) {
            removeDuplicates.push(nums[i]);
        }
    }

    let tot = 0;

    for (let i = 1; i < removeDuplicates.length - 1; i++) {
        if (removeDuplicates[i] > removeDuplicates[i - 1] && removeDuplicates[i] > removeDuplicates[i + 1]) {
            tot++;
        } else if (removeDuplicates[i] < removeDuplicates[i - 1] && removeDuplicates[i] < removeDuplicates[i + 1]) {
            tot++;
        }
    }

    return tot;
};