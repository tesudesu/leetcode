// https://leetcode.com/problems/largest-3-same-digit-number-in-string/

var largestGoodInteger = function(num) {
    let res = "";
    let resDigit = -Infinity;
    let streak = 1;

    for (let i = 1; i < num.length; i++) {
        if (num[i] === num[i - 1]) {
            streak++;
            if (streak === 3) {
                const number = Number(num[i]);
                if (number > resDigit) {
                    resDigit = number;
                    res = num[i] + num[i] + num[i];
                }
                streak = 0;
            }
        } else {
            streak = 1;
        }
    }

    return res;
};