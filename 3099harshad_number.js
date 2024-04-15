// https://leetcode.com/problems/harshad-number/

var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0;

    let num = x;

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    if (x % sum === 0) {
        return sum;
    }

    return -1;
};