// https://leetcode.com/problems/next-greater-element-ii/

var nextGreaterElements = function(nums) {
    const n = nums.length;
    let stack = [];
    stack.push(nums[n - 1]);
    let ans = Array(n).fill(-1);

    for (let i = 2 * n - 2; i >= 1; i--) {
        while (stack[stack.length - 1] <= nums[i % n]) {
            stack.pop();
        }
        if (stack.length > 0 && stack[stack.length - 1] > nums[i % n]) {
            ans[i % n] = stack[stack.length - 1];
        }
        stack.push(nums[i % n]);
    }

    return ans;
};


// var nextGreaterElements = function(nums) {
//     let n = nums.length;
//     if (n === 1) return [-1];
    
//     let stack = [];
//     stack.push(nums[n - 1]);
//     let ans = Array(n).fill(-1);

//     let i = n - 2

//     while ((i + n) % n >= 0) {
//         while (stack[stack.length - 1] <= nums[(i + n) % n]) {
//             stack.pop();
//         }
//         if (stack.length > 0 && stack[stack.length - 1] > nums[(i + n) % n]) {
//             ans[(i + n) % n] = stack[stack.length - 1];
//         }
//         stack.push(nums[(i + n) % n]);
//         i--;
//     }

//     return ans;
// };


// var nextGreaterElements = function(nums) {
//     let double = [...nums, ...nums];
//     let ans = Array(nums.length).fill(-1);
//     for (let i = nums.length; i < double.length; i++) {
//         if (double[i] > nums[nums.length - 1]) {
//             ans[nums.length - 1] = double[i];
//             break;
//         }
//     }

//     for (let i = nums.length - 2; i >= 0; i--) {
//         if (nums[i + 1] > nums[i]) {
//             ans[i] = nums[i + 1];
//         } else if (ans[i + 1] > nums[i]) {
//             ans[i] = ans[i + 1];
//         } else {
//             for (let j = i + 1; j < double.length; j++) {
//                 if (double[j] > nums[i]) {
//                     ans[i] = double[j];
//                     break;
//                 }
//             }
//         }
//     }

//     return ans;
// };