// https://leetcode.com/problems/third-maximum-number/

// SOLUTION 1

var thirdMax = function(nums) {
    const sortedNums = nums.sort((a,b) => (b-a));
    let uniqueNums = [];
    uniqueNums[0] = sortedNums[0];
    for (let i = 1; i < sortedNums.length; i++) {
        if (sortedNums[i] !== sortedNums[i-1]) {
            uniqueNums.push(sortedNums[i]);
        }
    }
    if (uniqueNums[2] || uniqueNums[2] == 0) {
        return uniqueNums[2];
    } else {
        return uniqueNums[0];
    }
};

// SOLUTION 2

var thirdMax = function(nums) {
    const set = new Set(nums);
    const sorted = [...set].sort((a,b) => (b-a));
    if (sorted[2] || sorted[2] == 0) {
        return sorted[2];
    } else {
        return sorted[0];
    }
};