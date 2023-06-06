// https://leetcode.com/problems/max-consecutive-ones-iii/

var longestOnes = function(nums, k) {
    let left = 0;
    let right = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            k--;
        }
        if (k < 0) {
            if (nums[left] === 0) k++;
            left++;
        }
        right++;
    }

    return right - left;
};

// var longestOnes = function(nums, k) {
//     let longest = 0;
//     let temp = 0;
//     let zeroPositions = [];
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === 1) {
//             temp++;
//         } else if (zeroPositions.length < k) {
//             temp++;
//             zeroPositions.push(i);
//         } else if (k !== 0 && zeroPositions.length >= k) {
//             longest = Math.max(temp, longest);
//             temp = i - zeroPositions[0];
//             zeroPositions.shift();
//             zeroPositions.push(i);
//         } else {
//             longest = Math.max(temp, longest);
//             temp = 0;
//         }
//     }
//     return Math.max(temp, longest);
// };