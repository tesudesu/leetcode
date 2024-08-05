// https://leetcode.com/problems/sort-the-people/

var sortPeople = function(names, heights) {
    let heightsWithIndex = heights.map((e, i) => [e, i]);

    heightsWithIndex.sort((a, b) => b[0] - a[0]);

    let ans = Array(names.length).fill();

    for (let i = 0; i < heightsWithIndex.length; i++) {
        ans[i] = names[heightsWithIndex[i][1]];
    }

    return ans;
};