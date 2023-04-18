// https://leetcode.com/problems/apply-transform-over-each-element-in-array/

var map = function(arr, fn) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        ans.push(fn(arr[i], i));
    }
    return ans;
};