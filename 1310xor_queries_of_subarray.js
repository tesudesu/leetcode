// https://leetcode.com/problems/xor-queries-of-a-subarray/

var xorQueries = function(arr, queries) {
    let xorPrefix = Array(arr.length).fill();
    xorPrefix[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
        xorPrefix[i] = xorPrefix[i - 1] ^ arr[i];
    }

    let ans = Array(queries.length).fill();

    for (let i = 0; i < queries.length; i++) {
        ans[i] = xorPrefix[queries[i][1]] ^ (queries[i][0] - 1 >= 0 ? xorPrefix[queries[i][0] - 1] : 0);
    }

    return ans;
};