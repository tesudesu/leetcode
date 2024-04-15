// https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/

const { Queue } = require('@datastructures-js/queue');

// O(n) space

var countStudents = function(students, sandwiches) {
    const queue = new Queue([...students]);

    let i = 0;

    let times = queue.size();
    let time = 1;

    while (time <= times) {
        if (queue.front() === sandwiches[i]) {
            i++;
            queue.dequeue();
            times = queue.size();
            time = 1;
        } else {
            time++;
            const front = queue.dequeue();
            queue.enqueue(front);
        }
    }

    return queue.size();
};


// O(1) space

var countStudents = function(students, sandwiches) {
    let circleStudents = 0;
    let squareStudents = 0;

    for (let i = 0; i < students.length; i++) {
        if (students[i] === 1) {
            squareStudents++;
        } else {
            circleStudents++;
        }
    }

    for (let i = 0; i < sandwiches.length; i++) {
        if (sandwiches[i] === 1) {
            if (squareStudents > 0) {
                squareStudents--;
            } else {
                return sandwiches.length - i;
            }
        } else {
            if (circleStudents > 0) {
                circleStudents--;
            } else {
                return sandwiches.length - i;
            }
        }
    }

    return 0;
};