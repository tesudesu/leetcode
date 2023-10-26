// https://leetcode.com/problems/pascals-triangle-ii/

var getRow = function(rowIndex) {
    let prev = [1];

    for (let i = 0; i < rowIndex; i++) {
        let curr = Array(prev.length + 1).fill();
        for (let j = 0; j < curr.length; j++) {
            if (j === 0 || j === curr.length - 1) {
                curr[j] = prev[0];
            } else {
                curr[j] = prev[j - 1] + prev[j];
            }
        }
        prev = curr;
    }

    return prev;
};