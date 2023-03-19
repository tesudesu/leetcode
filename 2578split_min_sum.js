// https://leetcode.com/problems/split-with-minimum-sum/

var splitNum = function(num) {
    const numArr = num.toString().split('');
    numArr.sort((a, b) => a - b);
    let num1 = '';
    let num2 = '';
    for (let i = 0; i < numArr.length; i++) {
        if (i % 2 === 0) {
            num1 += numArr[i];
        } else {
            num2 += numArr[i];
        }
    }
    return Number(num1) + Number(num2);
};