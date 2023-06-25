// https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/

var nearestExit = function(maze, entrance) {
    let stack = [entrance];
    maze[entrance[0]][entrance[1]] = '+';
    let tot = 0;

    while (stack.length > 0) {
        let newLevel = [];

        while (stack.length > 0) {
            const [x, y] = stack.pop();

            if (x + 1 < maze.length && maze[x + 1][y] === '.') {
                newLevel.push([x + 1, y]);
                maze[x + 1][y] = '+';
            } else if (x + 1 === maze.length && tot > 0) {
                return tot;
            }

            if (x - 1 >= 0 && maze[x - 1][y] === '.') {
                newLevel.push([x - 1, y]);
                maze[x - 1][y] = '+';
            } else if (x - 1 < 0 && tot > 0) {
                return tot;
            }

            if (y + 1 < maze[0].length && maze[x][y + 1] === '.') {
                newLevel.push([x, y + 1]);
                maze[x][y + 1] = '+';
            } else if (y + 1 === maze[0].length && tot > 0) {
                return tot;
            }

            if (y - 1 >= 0 && maze[x][y - 1] === '.') {
                newLevel.push([x, y - 1]);
                maze[x][y - 1] = '+';
            } else if (y - 1 < 0 && tot > 0) {
                return tot;
            }
        }

        tot++;
        stack = newLevel;
    }

    return -1;
};