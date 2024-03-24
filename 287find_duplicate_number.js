// https://leetcode.com/problems/find-the-duplicate-number/

var findDuplicate = function(nums) {
    let slowInd = 0;
    let fastInd = 0;

    do {
        slowInd = nums[slowInd];
        fastInd = nums[fastInd];
        fastInd = nums[fastInd];
    } while (slowInd !== fastInd);

    let slow2Ind = 0;

    while (slow2Ind !== slowInd) {
        slow2Ind = nums[slow2Ind];
        slowInd = nums[slowInd];
    }

    return slow2Ind;
};


// Negative markings

// var findDuplicate = function(nums) {
//     for (let i = 0; i < nums.length; i++) {
//         const num = Math.abs(nums[i]);
//         if (nums[num] < 0) {
//             return num;
//         }
//         nums[num] *= -1;
//     }
// };


// Brute force

// var findDuplicate = function(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) return nums[i];
//         }
//     }
// };