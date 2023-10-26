// https://leetcode.com/problems/course-schedule-ii/

const { Queue } = require('@datastructures-js/queue');

// Topological sort

var findOrder = function (numCourses, prerequisites) {
    let res = [];

    const numIncoming = new Map();
    const prereqToCourse = new Map();

    for (let i = 0; i < prerequisites.length; i++) {
        const [course, prereq] = prerequisites[i];

        numIncoming.set(course, (numIncoming.get(course) + 1) || 1);

        if (prereqToCourse.has(prereq)) {
            let arr = prereqToCourse.get(prereq);
            arr.push(course);
            prereqToCourse.set(prereq, arr);
        } else {
            prereqToCourse.set(prereq, [course]);
        }
    }

    const queue = new Queue();

    for (let i = 0; i < numCourses; i++) {
        if (!numIncoming.has(i)) {
            queue.enqueue(i);
        }
    }

    while (queue.size() > 0) {
        const curr = queue.dequeue();
        res.push(curr);
        
        if (!prereqToCourse.has(curr)) continue;

        const nextCourses = prereqToCourse.get(curr);

        for (let i = 0; i < nextCourses.length; i++) {
            if (numIncoming.has(nextCourses[i])) {
                numIncoming.set(nextCourses[i], numIncoming.get(nextCourses[i]) - 1);
                if (numIncoming.get(nextCourses[i]) === 0) {
                    queue.enqueue(nextCourses[i]);
                    numIncoming.delete(nextCourses[i]);
                }
            }
        }
    }

    if (numIncoming.size === 0) {
        return res;
    } else {
        return [];
    }
};