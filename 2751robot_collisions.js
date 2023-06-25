// https://leetcode.com/problems/robot-collisions/

var survivedRobotsHealths = function(positions, healths, directions) {
    const ordered = positions.map((position, i) => [position, healths[i], directions[i], i]);

    ordered.sort((a, b) => a[0] - b[0]);

    let stack = [];

    let lasting = false;

    for (let i = 0; i < ordered.length; i++) {
        if (ordered[i][2] === 'L' && stack[stack.length - 1] && stack[stack.length - 1][2] === 'R') {
            if (stack[stack.length - 1][1] > ordered[i][1]) {
                stack[stack.length - 1][1]--;
                continue;
            }
            if (stack[stack.length - 1][1] === ordered[i][1]) {
                stack.pop();
                continue;
            }
            while (stack[stack.length - 1] && stack[stack.length - 1][2] === 'R') {
                let last = stack[stack.length - 1];
                if (ordered[i][1] > last[1]) {
                    stack.pop();
                    ordered[i][1]--;
                    lasting = true;
                } else if (last[1] > ordered[i][1]) {
                    stack[stack.length - 1][1]--;
                    lasting = false;
                    break;
                } else {
                    stack.pop();
                    lasting = false;
                    break;
                }
            }
            if (lasting) stack.push(ordered[i]);
        } else {
            stack.push(ordered[i]);
        }
    }

    return stack.sort((a, b) => a[3] - b[3]).map(item => item[1]);
};