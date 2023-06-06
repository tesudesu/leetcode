// https://leetcode.com/problems/kth-largest-element-in-an-array/

var findKthLargest = function(nums, k) {
    let largest = nums[0];
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > largest) largest = nums[i];
    }

    let diffHash = {};

    for (let i = 0; i < nums.length; i++) {
        const diff = largest - nums[i];
        if (diffHash[diff]) {
            diffHash[diff]++;
        } else {
            diffHash[diff] = 1;
        }
    }

    let count = 0;
    let diff = 0;

    while (count < k) {
        if (diffHash[diff]) {
            count += diffHash[diff];
        }
        diff++;
    }

    return largest - diff + 1;
};

// var findKthLargest = function(nums, k) {
//     nums.sort((a, b) => b - a);
//     return nums[k-1];
// };