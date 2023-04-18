// https://leetcode.com/problems/filter-elements-from-array/

var filter = function(arr, fn) {
    let ans = [];
    for (let i = 0; i < arr.length; i++) {
        if (fn(arr[i], i)) {
            ans.push(arr[i]);
        }
    }
    return ans;
};