// https://leetcode.com/problems/spiral-matrix-iv/

var spiralMatrix = function(m, n, head) {
    const ans = Array(m).fill().map(() => Array(n).fill(-1));

    let direction = "right";

    let x = 0;
    let y = 0;

    while (head) {
        ans[x][y] = head.val;
        if (direction === "right") { 
            y++;
            if (y === n || ans[x][y] !== -1) {
                y--;
                x++;
                direction = "down";
            }
        } else if (direction === "down") {
            x++;
            if (x === m || ans[x][y] !== -1) {
                x--;
                y--;
                direction = "left";
            }
        } else if (direction === "left") {
            y--;
            if (y < 0 || ans[x][y] !== -1) {
                y++;
                x--;
                direction = "up";
            }
        } else {
            x--;
            if (x < 0 || ans[x][y] !== -1) {
                x++;
                y++;
                direction = "right";
            }
        }
        head = head.next;
    }

    return ans;
};