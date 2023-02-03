// https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/

// SOLUTION 1

var findDisappearedNumbers = function(nums) {
    let result = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[Math.abs(nums[i])-1] > 0) {
            nums[Math.abs(nums[i])-1] *= -1;
        } 
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            result.push(i+1);
        }
    }
    return result;
};

// SOLUTION 2

var findDisappearedNumbers = function(nums) {
    let set = new Set();
    const length = nums.length;
    let value = 1;
    while (value <= length) {
        set.add(value);
        value++;
    }
    for (let i = 0; i < length; i++) {
        if (set.has(nums[i])) {
            set.delete(nums[i])
        }
    }
    return [...set];
};

// SOLUTION 3

var findDisappearedNumbers = function(nums) {
    let ans = [];
    for (let i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            ans.push(i);
        }
    }
    return ans;
};