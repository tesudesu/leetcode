// https://leetcode.com/problems/minimum-array-length-after-pair-removals/

var minLengthAfterRemovals = function(nums) {
    let i = 0;
    let j = Math.floor(nums.length / 2);

    let pairs = 0;

    while (i < Math.floor(nums.length / 2) && j < nums.length) {
        if (nums[j] > nums[i]) {
            pairs++;
            i++;
            j++;
        } else {
            j++;
        }
    }

    return nums.length - (pairs * 2);
};


// var minLengthAfterRemovals = function(nums) {
//     let map = new Map();
//     let maxFreq = 0;

//     for (let i = 0; i < nums.length; i++) {
//         map.set(nums[i], (map.get(nums[i]) + 1) || 1);
//         maxFreq = Math.max(maxFreq, map.get(nums[i]));
//     }

//     if (maxFreq > Math.floor(nums.length / 2)) {
//         return maxFreq - (nums.length - maxFreq);
//     } else {
//         return nums.length % 2 === 0 ? 0 : 1;
//     }
// };