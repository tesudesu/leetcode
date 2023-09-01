// https://leetcode.com/problems/find-the-longest-equal-subarray/

var longestEqualSubarray = function(nums, k) {
    let longest = 1;

    let map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (map.has(nums[i])) {
            let arr = map.get(nums[i]);
            arr.push(i);
            map.set(nums[i], arr);
        } else {
            map.set(nums[i], [i]);
        }
    }

    for (let [num, arr] of map) {
        let i = 0;
        let j = 1;
        while (j < arr.length) {
            if (arr[j] - arr[i] - (j - i) <= k) {
                longest = Math.max(longest, j - i + 1);
                j++;
            } else {
                if (i < j) {
                    i++;
                } else {
                    i++;
                    j++;
                }
            }
        }
    }

    return longest;
};


// var longestEqualSubarray = function(nums, k) {
//     let longest = 1;

//     let map = new Map();
//     let i = 0;

//     for (let j = 0; j < nums.length; j++) {
//         map.set(nums[j], (map.get(nums[j]) || 0) + 1);
//         longest = Math.max(longest, map.get(nums[j]));
//         if (j - i + 1 - longest > k) {
//             map.set(nums[i], map.get(nums[i]) - 1);
//             i++;
//         }
//     }

//     return longest;
// };