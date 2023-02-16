// https://leetcode.com/problems/alternating-digit-sum/

var alternateDigitSum = function(n) {
    let numArr = [];
    while (n > 0) {
        numArr.unshift(n % 10);
        n = Math.floor(n/10);
    }
    let sum = 0;
    let positive = 1;
    for (let i = 0; i < numArr.length; i++) {
        if (positive === 1) {
            sum += numArr[i];
        } else {
            sum -= numArr[i];
            
        }
        positive *= -1;
    }
    return sum;
};