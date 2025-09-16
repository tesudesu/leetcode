// https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/

var maximumLength = function(nums) {
    let evens = 0;
    let odds = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            evens++;
        } else {
            odds++;
        }
    }

    let prev;
    let alternating = 1;

    if (nums[0] % 2 === 0) {
        prev = "even";
    } else {
        prev = "odd";
    }

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] % 2 === 0) {
            if (prev === "odd") {
                alternating++;
                prev = "even";
            }
        } else {
            if (prev === "even") {
                alternating++;
                prev = "odd";
            }
        }
    }

    return Math.max(evens, odds, alternating);
};