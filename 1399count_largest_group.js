// https://leetcode.com/problems/count-largest-group/

var countLargestGroup = function(n) {
    let count = Array(37).fill(0);

    for (let i = 1; i <= n; i++) {
        let temp = i;
        let sum = 0;
        while (temp > 0) {
            sum += temp % 10;
            temp = Math.floor(temp / 10);
        }
        count[sum]++;
    }

    let largestSize = Math.max(...count);

    let ans = 0;

    for (let num of count) {
        if (num === largestSize) {
            ans++;
        }
    }

    return ans;
};