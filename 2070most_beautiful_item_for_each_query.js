// https://leetcode.com/problems/most-beautiful-item-for-each-query/

var maximumBeauty = function(items, queries) {
    items.sort((a, b) => a[0] - b[0]);
    queries = queries.map((e, i) => [e, i]);
    queries.sort((a, b) => a[0] - b[0]);

    let ans = Array(queries.length).fill();

    let j = 0;
    let max = 0;

    for (let i = 0; i < queries.length; i++) {
        while (j < items.length && items[j][0] <= queries[i][0]) {
            max = Math.max(max, items[j][1]);
            j++;
        }
        ans[queries[i][1]] = max;
    }

    return ans;
};