// https://leetcode.com/problems/rotate-array/

var rotate = function(nums, k) {
    k = k % nums.length;
    const pivot = nums.length - k;
    for (let i = 0; i < Math.floor(pivot / 2); i++) {
        const temp = nums[i];
        nums[i] = nums[pivot - 1 - i];
        nums[pivot - 1 - i] = temp;
    }

    for (let i = pivot; i < Math.floor((nums.length + pivot) / 2); i++) {
        const temp = nums[i];
        nums[i] = nums[nums.length - 1 - i + pivot];
        nums[nums.length - 1 - i + pivot] = temp;
    }

    for (let i = 0; i < Math.floor(nums.length / 2); i++) {
        const temp = nums[i];
        nums[i] = nums[nums.length - 1 - i];
        nums[nums.length - 1 - i] = temp;
    }
};

// var rotate = function(nums, k) {
//     k = k % nums.length;
//     const shift = nums.splice(nums.length - k, k);
//     nums.splice(0, 0, ...shift);
// };