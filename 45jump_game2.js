// https://leetcode.com/problems/jump-game-ii/

var jump = function(nums) {
    let tot = 0;
    let left = 0;
    let right = 0;

    while (right < nums.length - 1) {
        let farthest = 0;
        for (let i = left; i <= right; i++) {
            farthest = Math.max(farthest, i + nums[i]);
        }
        left = right + 1;
        right = farthest;
        tot++;
    }

    return tot;
};

// DP approach

// var jump = function(nums) {
//     let mins = Array(nums.length);
//     mins[mins.length - 1] = 0;

//     for (let i = nums.length - 2; i >= 0; i--) {
//         if (nums[i] === 0) {
//             mins[i] = Infinity;
//         } else {
//             let smallest = Infinity;
//             for (let j = i + 1; j <= i + nums[i] && j < nums.length; j++) {
//                 smallest = Math.min(smallest, mins[j]);
//             }
//             mins[i] = 1 + smallest;
//         }
//     }

//     return mins[0];
// };

console.log(jump(nums = [2,3,1,1,4]))
console.log(jump(nums = [2, 1]))
console.log(jump([1,1,1,1]))