// https://leetcode.com/problems/asteroid-collision

var asteroidCollision = function(asteroids) {
    let stack = [asteroids[0]];
    for (let i = 1; i < asteroids.length; i++) {
        const curr = asteroids[i];
        const last = stack[stack.length-1];

        if (last > 0 && curr < 0) {
            if (Math.abs(curr) > Math.abs(last)) {
                stack.pop();
                i--;
            } else if (Math.abs(curr) === Math.abs(last)) {
                stack.pop();
            }
        } else {
            stack.push(curr);
        }
    }
    return stack;
};