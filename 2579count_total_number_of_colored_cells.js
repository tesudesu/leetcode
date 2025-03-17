// https://leetcode.com/problems/count-total-number-of-colored-cells/

var coloredCells = function(n) {
    if (n === 1) {
        return 1;
    } 

    let tot = 1;
    let step = 4;

    for (let i = 2; i <= n; i++) {
        tot += step;
        step += 4;
    }

    return tot;
};