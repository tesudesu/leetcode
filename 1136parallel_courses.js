// https://leetcode.com/problems/parallel-courses/

const { Queue } = require('@datastructures-js/queue');

var minimumSemesters = function(n, relations) {
    const incoming = new Map();
    const prereqToCourse = new Map();

    for (let i = 0; i < relations.length; i++) {
        const [prereq, course] = relations[i];

        incoming.set(course, (incoming.get(course) + 1) || 1);
        if (prereqToCourse.has(prereq)) {
            let arr = prereqToCourse.get(prereq);
            arr.push(course);
            prereqToCourse.set(prereq, arr);
        } else {
            prereqToCourse.set(prereq, [course]);
        }
    }

    let queue = new Queue();

    for (let i = 1; i <= n; i++) {
        if (!incoming.has(i)) {
            queue.enqueue(i);
        }
    }

    let ans = 0;

    while (queue.size() > 0) {
        ans++;
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const curr = queue.dequeue();
            if (!prereqToCourse.has(curr)) continue;

            const nextCourses = prereqToCourse.get(curr);
            for (let j = 0; j < nextCourses.length; j++) {
                if (incoming.has(nextCourses[j])) {
                    incoming.set(nextCourses[j], incoming.get(nextCourses[j]) - 1);
                    if (incoming.get(nextCourses[j]) === 0) {
                        incoming.delete(nextCourses[j]);
                        queue.enqueue(nextCourses[j]);
                    }
                }
            }
        }
    }

    if (incoming.size === 0) {
        return ans;
    } else {
        return -1;
    }
};