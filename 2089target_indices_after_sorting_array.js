// https://leetcode.com/problems/find-target-indices-after-sorting-array/

var targetIndices = function(nums, target) {
    let countTarget = 0;
    let countSmaller = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < target) {
            countSmaller++;
        } else if (nums[i] === target) {
            countTarget++;
        }
    }
    let ans = Array(countTarget).fill();
    if (ans.length === 0) return ans;
    ans[0] = countSmaller;
    for (let i = 1; i < ans.length; i++) {
        ans[i] = ans[i - 1] + 1;
    }
    return ans;
};


// var targetIndices = function(nums, target) {
//     nums.sort((a, b) => a - b);
//     let ans = [];
//     let found = false
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === target) {
//             ans.push(i);
//             found = true;
//         } else if (found) {
//             break;
//         }
//     }
//     return ans;
// };