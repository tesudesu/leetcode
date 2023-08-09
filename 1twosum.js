// https://leetcode.com/problems/two-sum/

var twoSum = function(nums, target) {
    const mapped = nums.map((elem, ind) => [elem, ind]);
    mapped.sort((a, b) => a[0] - b[0]);

    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        const sum = mapped[left][0] + mapped[right][0];
        if (sum === target) {
            return [mapped[left][1], mapped[right][1]];
        } else if (sum > target) {
            right--;
        } else {
            left++;
        }
    }
};


// var twoSum = function(nums, target) {
//     const map = new Map();

//     for (let i = 0; i < nums.length; i++) {
//         const complement = target - nums[i];
//         if (map.has(complement)) {
//             return [i, map.get(complement)];
//         } 
//         map.set(nums[i], i);
//     }
// };


// var twoSum = function(nums, target) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] + nums[j] == target) {
//                 return [i, j];
//             }
//         }
//     }
// };