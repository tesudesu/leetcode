// https://leetcode.com/problems/rank-transform-of-an-array/

var arrayRankTransform = function(arr) {
    if (arr.length === 0) return [];

    let mapped = arr.map((a, i) => [a, i]);

    mapped.sort((a, b) => a[0] - b[0]);

    let ans = Array(arr.length).fill();
    ans[mapped[0][1]] = 1;

    let curr = 1;

    for (let i = 1; i < mapped.length; i++) {
        if (mapped[i][0] === mapped[i - 1][0]) {
            ans[mapped[i][1]] = curr;
        } else {
            curr++;
            ans[mapped[i][1]] = curr;
        }
    }

    return ans;
};