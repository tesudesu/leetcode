// https://leetcode.com/problems/valid-mountain-array/

var validMountainArray = function(arr) {
    if (arr.length < 3) {
        return false;
    }
    let increasing = true;
    let increasingNum = false;
    for (let i = 1; i < arr.length; i++) {
        if (increasing) {
            if (arr[i] > arr[i-1]) {
                increasingNum = true;
            } else if (arr[i] < arr[i-1]) {
                increasing = false;
            } else {
                return false;
            }
        } else {
            if (arr[i] >= arr[i-1]) {
                return false;
            }
        }
    }
    return !increasing && increasingNum;
};