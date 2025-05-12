// https://leetcode.com/problems/find-numbers-with-even-number-of-digits/

var findNumbers = function(nums) {
    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        let str = String(nums[i]);
        if (str.length % 2 === 0) {
            tot++;
        }
    }

    return tot;
};