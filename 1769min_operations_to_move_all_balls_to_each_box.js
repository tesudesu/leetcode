// https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/

var minOperations = function(boxes) {
    let ans = Array(boxes.length).fill(0);

    let balls = 0;
    let moves = 0;

    for (let i = 0; i < boxes.length; i++) {
        moves += balls;
        ans[i] = moves;
        if (boxes[i] === "1") {
            balls++;
        }
    }

    balls = 0;
    moves = 0;

    for (let i = boxes.length - 1; i >= 0; i--) {
        moves += balls;
        ans[i] += moves;
        if (boxes[i] === "1") {
            balls++;
        }
    }

    return ans;
};