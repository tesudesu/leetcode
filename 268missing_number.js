// https://leetcode.com/problems/missing-number/

var missingNumber = function(nums) {
    let sumTheoretical = 0;
    for (let i = 1; i <= nums.length; i++) {
        sumTheoretical += i;
    }
    let sumActual = 0;
    for (let i = 0; i < nums.length; i++) {
        sumActual += nums[i];
    }
    return sumTheoretical - sumActual;
};


var missingNumber = function(nums) {
    const set = new Set(nums);

    for (let i = 0; i <= nums.length; i++) {
        if (!set.has(i)) {
            return i;
        }
    }
};