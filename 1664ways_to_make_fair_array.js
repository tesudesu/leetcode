// https://leetcode.com/problems/ways-to-make-a-fair-array/

var waysToMakeFair = function(nums) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            even += nums[i];
        } else {
            odd += nums[i];
        }
    }

    let currEven = 0;
    let currOdd = 0;
    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        if (i % 2 === 0) {
            if (currEven + odd === currOdd + (even - nums[i])) {
                tot++;
            }
            even -= nums[i];
            currEven += nums[i];
        } else {
            if (currEven + (odd - nums[i]) === currOdd + even) {
                tot++;
            }
            odd -= nums[i];
            currOdd += nums[i];
        }
    }

    return tot;
};