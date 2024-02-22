// https://leetcode.com/problems/find-polygon-with-the-largest-perimeter/

var largestPerimeter = function(nums) {
    nums.sort((a, b) => b - a);
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];
    }

    for (let i = 0; i < nums.length; i++) {
        sum -= nums[i];
        if (sum > nums[i]) {
            return sum + nums[i];
        }
    }

    return -1;
};


// var largestPerimeter = function(nums) {
//     nums.sort((a, b) => a - b);
//     const sums = Array(nums.length).fill();
//     sums[0] = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         sums[i] = sums[i - 1] + nums[i];
//     }

//     for (let i = nums.length - 1; i >= 2; i--) {
//         if (nums[i] < sums[i - 1]) {
//             return sums[i - 1] + nums[i];
//         }
//     }

//     return -1;
// };