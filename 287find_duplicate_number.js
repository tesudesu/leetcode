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


// var findDuplicate = function(nums) {
//     let res;
    
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[Math.abs(nums[i])] < 0) {
//             res = Math.abs(nums[i]);
//             break;
//         } else {
//             nums[Math.abs(nums[i])] *= -1;
//         }
//     }

//     for (let i = 0; i < nums.length; i++) {
//         nums[i] = Math.abs(nums[i]);
//     }

//     return res;
// };


// Brute force

// var findDuplicate = function(nums) {
//     for (let i = 0; i < nums.length - 1; i++) {
//         for (let j = i + 1; j < nums.length; j++) {
//             if (nums[i] === nums[j]) return nums[i];
//         }
//     }
// };