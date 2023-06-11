// https://leetcode.com/problems/neither-minimum-nor-maximum/

var findNonMinOrMax = function(nums) {
    let max = nums[0];
    let min = nums[0];
    let temp;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > min && nums[i] < max) return nums[i];
        if (nums[i] > max) {
            temp = max;
            max = nums[i];
        } else if (nums[i] < min) {
            temp = min;
            min = nums[i];
        }
        if (temp > min && temp < max) return temp;
    }
    return -1;
};

// var findNonMinOrMax = function(nums) {
//     const min = Math.min(...nums);
//     const max = Math.max(...nums);

//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] !== min && nums[i] !== max) return nums[i];
//     }

//     return -1;
// };