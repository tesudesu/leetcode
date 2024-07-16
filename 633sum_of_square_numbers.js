// https://leetcode.com/problems/sum-of-square-numbers/

var judgeSquareSum = function(c) {
    let squares = new Set();

    const end = Math.floor(Math.sqrt(c));

    for (let i = 0; i <= end; i++) {
        const square = i * i;
        squares.add(i * i);
        if (squares.has(c - square)) {
            return true;
        }
    }

    return false;
};


var judgeSquareSum = function(c) {
    let i = 0; 
    let j = Math.floor(Math.sqrt(c));

    while (i <= j) {
        const sum = i * i + j * j;
        if (sum > c) {
            j--;
        } else if (sum < c) {
            i++;
        } else {
            return true;
        }
    }

    return false;
};