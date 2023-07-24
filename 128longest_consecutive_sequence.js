// https://leetcode.com/problems/longest-consecutive-sequence/

// O(n) time

var longestConsecutive = function(nums) {
    let longest = 0;

    const set = new Set(nums);
    const been = new Set();

    for (let i = 0; i < nums.length; i++) {
        if (been.has(nums[i])) continue;

        let temp = 1;
        been.add(nums[i]);
        for (let j = nums[i] + 1; j < nums[i] + nums.length; j++) {
            if (!set.has(j)) break;
            temp++;
            been.add(j);
        }

        for (let j = nums[i] - 1; j >= nums[i] - nums.length; j--) {
            if (!set.has(j)) break;
            temp++;
            been.add(j);
        }

        longest = Math.max(longest, temp);
    }

    return longest;
};


// O(nlogn) time

// var longestConsecutive = function(nums) {
//     if (nums.length === 0) return 0;
//     let longest = 1;
//     let temp = 1;

//     nums.sort((a, b) => a - b);

//     let prev = nums[0];

//     for (let i = 1; i < nums.length; i++) {
//         if (nums[i] - prev === 1) {
//             temp++;
//         } else if (nums[i] === prev) {
//             continue;
//         } else {
//             longest = Math.max(longest, temp);
//             temp = 1;
//         }
//         prev = nums[i];
//     }

//     return Math.max(longest, temp);
// };