// https://leetcode.com/problems/domino-and-tromino-tiling/

var numTilings = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 5;

    let one = 1;
    let two = 2;
    let three = 5;

    for (let i = 4; i <= n; i++) {
        const temp = three;
        const temp2 = two;
        three = (three * 2 + one) % (1e9 + 7);
        two = temp;
        one = temp2;
    }

    return three;
};