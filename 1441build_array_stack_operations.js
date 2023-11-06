// https://leetcode.com/problems/build-an-array-with-stack-operations/

var buildArray = function(target, n) {
    let ans = [];

    let targetIndex = 0;

    for (let i = 1; i <= n; i++) {
        curr = i;
        ans.push("Push");
        if (curr < target[targetIndex]) {
            ans.push("Pop");
        } else if (curr === target[targetIndex]) {
            targetIndex++;
        }
        if (targetIndex === target.length) break;
    }

    return ans;
};