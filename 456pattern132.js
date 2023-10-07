// https://leetcode.com/problems/132-pattern/

var find132pattern = function(nums) {
    if (nums.length < 3) return false;

    let biggestSmallerAfter = Array(nums.length).fill(0);

    let stack = [];

    for (let i = biggestSmallerAfter.length - 1; i > 0; i--) {
        if (stack.length === 0 || nums[i] < stack[stack.length - 1]) {
            biggestSmallerAfter[i] = nums[i];
            stack.push(nums[i]);
        } else {
            let prev;
            while (nums[i] >= stack[stack.length - 1]) {
                prev = stack.pop();
            }
            biggestSmallerAfter[i] = prev;
            stack.push(nums[i]);
        }
    }

    let min = nums[0];
    let max = nums[0];

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
            max = -Infinity;
        } else if (nums[i] > max) {
            max = nums[i];
        }
        if (max > min && biggestSmallerAfter[i] > min && biggestSmallerAfter[i] < max) {
            return true;
        }
    }

    return false;
};


// TLE

// var find132pattern = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         let min = nums[i];
//         let max = -Infinity;
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[j] < max && nums[j] > min) return true;
//             if (nums[j] > max) {
//                 max = nums[j];
//             }
//         }
//     }

//     return false;
// };