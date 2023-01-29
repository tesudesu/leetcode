// https://leetcode.com/problems/remove-duplicates-from-sorted-array/

var removeDuplicates = function(nums) {
    let ind = 2;
    for (let i = 1; i < nums.length; i++) {
        while (nums[i] <= nums[i-1]) {
            nums[i] = nums[ind];
            ind++;
        }
        // if (nums[i] <= nums[i-1]) {
        //     nums[i] = nums[ind];
        //     ind++;
        //     i--;
        // }
    }

    let total = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i-1]) total++;
        else break;
    }
    return total; 
};