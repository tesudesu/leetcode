// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/

var sumZero = function(n) {
    let ans = [];

    if (n % 2 === 1) {
        ans.push(0);
    }

    let half = Math.floor(n / 2);

    for (let i = 1; i <= half; i++) {
        ans.push(i);
        ans.push(-i);
    }

    return ans;
};