// https://leetcode.com/problems/chunk-array/

var chunk = function(arr, size) {
    let ans = Array(Math.ceil(arr.length/size));
    let ind = 0;
    let row = [];
    for (let i = 0; i < arr.length; i++) {
        if (row.length < size) {
            row.push(arr[i]);
        } else {
            ans[ind] = row;
            row = [];
            row.push(arr[i]);
            ind++;
        }
    }
    ans[ans.length-1] = row;
    return ans;
};