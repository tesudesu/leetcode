// https://leetcode.com/problems/find-lucky-integer-in-an-array/

var findLucky = function(arr) {
    const count = new Map();

    for (const num of arr) {
        count.set(num, (count.get(num) + 1) || 1);
    }

    let ans = -1;

    for (const [num, freq] of count) {
        if (num === freq) {
            ans = Math.max(ans, num);
        }
    }

    return ans;
};