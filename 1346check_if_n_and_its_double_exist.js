// https://leetcode.com/problems/check-if-n-and-its-double-exist/

var checkIfExist = function(arr) {
    const nums = new Set();
    let zeros = 0;

    for (let i = 0; i < arr.length; i++) {
        nums.add(arr[i]);
        if (arr[i] === 0) {
            zeros++;
        }
    }

    if (zeros > 1) {
        return true;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) continue;
        if (nums.has(arr[i] * 2)) {
            return true;
        }
    }
    
    return false;
};