// https://leetcode.com/problems/maximum-difference-between-even-and-odd-frequency-i/

var maxDifference = function(s) {
    let smallestEven = Infinity;
    let biggestOdd = -Infinity;

    let count = Array(26).fill(0);

    for (let i = 0; i < s.length; i++) {
        let code = s.charCodeAt(i) - 97;
        count[code]++;
    }

    for (let i = 0; i < 26; i++) {
        if (count[i] === 0) continue;
        if (count[i] % 2 === 0) {
            if (count[i] < smallestEven) {
                smallestEven = count[i];
            }
        } else {
            if (count[i] > biggestOdd) {
                biggestOdd = count[i];
            }
        }
    }

    return biggestOdd - smallestEven;
};