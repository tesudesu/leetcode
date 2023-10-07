// https://leetcode.com/problems/partition-labels/

var partitionLabels = function(s) {
    let ans = [];

    let lastInd = {};

    for (let i = s.length - 1; i >= 0; i--) {
        if (!lastInd[s[i]]) {
            lastInd[s[i]] = i;
        }
    }

    let startPartition = 0;
    let endPartition = 0;

    for (let i = 0; i < s.length; i++) {
        if (i <= endPartition) {
            endPartition = Math.max(endPartition, lastInd[s[i]]);
        } else {
            ans.push(endPartition - startPartition + 1);
            startPartition = i;
            endPartition = lastInd[s[i]];
        }
    }

    ans.push(endPartition - startPartition + 1);

    return ans;
};