// https://leetcode.com/problems/last-moment-before-all-ants-fall-out-of-a-plank/

var getLastMoment = function(n, left, right) {
    let ans = 0;

    for (let i = 0; i < left.length; i++) {
        ans = Math.max(ans, left[i]);
    }

    for (let i = 0; i < right.length; i++) {
        ans = Math.max(ans, n - right[i]);
    }

    return ans;
};