// https://leetcode.com/problems/valid-perfect-square/

// O(log(num)) time

var isPerfectSquare = function(num) {
    let start = 1;
    let end = Math.ceil(num / 2);

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        const square = mid * mid;
        if (square === num) {
            return true;
        } else if (square < num) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return false;
};


// O(sqrt(num)) time

var isPerfectSquare = function(num) {
    let i = 1;
    while (i * i < num) {
        i++;
    }
    if (i * i === num) return true;
    return false;
};