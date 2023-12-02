// https://leetcode.com/problems/count-nice-pairs-in-an-array/

var countNicePairs = function(nums) {
    let map = new Map();
    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        let calc = nums[i] - reverse(nums[i]);
        if (map.has(calc)) {
            tot = (tot + map.get(calc)) % (1e9 + 7);
        }
        map.set(calc, (map.get(calc) + 1) || 1);
    }

    return tot;
};

const reverse = (number) => {
    let rev = 0;
    while (number > 0) {
        rev = rev * 10 + (number % 10);
        number = Math.floor(number / 10);
    }
    return rev;
};