// https://leetcode.com/problems/robot-bounded-in-circle/

var isRobotBounded = function(instructions) {
    let x = 0;
    let y = 0;
    let direction = "N";

    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === "G") {
            if (direction === "N") {
                x++;
            } else if (direction === "S") {
                x--;
            } else if (direction === "E") {
                y++;
            } else {
                y--;
            }
        } else if (instructions[i] === "L") {
            if (direction === "N") {
                direction = "W";
            } else if (direction === "S") {
                direction = "E";
            } else if (direction === "E") {
                direction = "N";
            } else {
                direction = "S";
            }
        } else {
            if (direction === "N") {
                direction = "E";
            } else if (direction === "S") {
                direction = "W";
            } else if (direction === "E") {
                direction = "S";
            } else {
                direction = "N";
            }
        }
    }

    return (x === 0 && y === 0) || direction !== "N";
};