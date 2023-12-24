// https://leetcode.com/problems/path-crossing/

var isPathCrossing = function(path) {
    const visited = new Set();
    visited.add("0,0");
    let x = 0;
    let y = 0;

    for (let i = 0; i < path.length; i++) {
        if (path[i] === "N") {
            y++;
        } else if (path[i] === "S") {
            y--;
        } else if (path[i] === "E") {
            x++;
        } else {
            x--;
        }

        const spot = `${x},${y}`;
        if (visited.has(spot)) {
            return true;
        }
        visited.add(spot);
    }

    return false;
};