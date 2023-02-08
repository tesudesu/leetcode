// https://leetcode.com/problems/separate-the-digits-in-an-array/

var separateDigits = function(nums) {
    let str = '';
    for (let i = 0; i < nums.length; i++) {
        str += nums[i];
    }
    let arr = str.split('');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = Number(arr[i]);
    }
    return arr;
};