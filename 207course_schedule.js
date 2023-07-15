// https://leetcode.com/problems/course-schedule/

// Topological sort, Kahn's algorithm

const { Queue } = require('@datastructures-js/queue');

var canFinish = function(numCourses, prerequisites) {
    const numOfIncoming = new Map();
    const outgoingNodes = new Map();

    for (let i = 0; i < prerequisites.length; i++) {
        const [course, prereq] = prerequisites[i];
        numOfIncoming.set(course, (numOfIncoming.get(course) || 0) + 1);
        if (!outgoingNodes.has(prereq)) {
            outgoingNodes.set(prereq, [course]);
        } else {
            let courses = outgoingNodes.get(prereq);
            courses.push(course);
            outgoingNodes.set(prereq, courses);
        }
    }

    const queue = new Queue();

    for (let i = 0; i < numCourses; i++) {
        if (!numOfIncoming.has(i)) {
            queue.enqueue(i);
        }
    }

    while (!queue.isEmpty()) {
        const curr = queue.dequeue();
        if (outgoingNodes.has(curr)) {
            const outgoings = outgoingNodes.get(curr);
            for (let i = 0; i < outgoings.length; i++) {
                numOfIncoming.set(outgoings[i], numOfIncoming.get(outgoings[i]) - 1);
                if (numOfIncoming.get(outgoings[i]) === 0) {
                    queue.enqueue(outgoings[i]);
                }
            }
        }
    }

    for (const node of numOfIncoming) {
        if (node[1] !== 0) return false;
    }

    return true;
};


// DFS

// var canFinish = function(numCourses, prerequisites) {
//     let passed = new Set();
//     const courseprereqs = new Map();

//     for (let i = 0; i < prerequisites.length; i++) {
//         const [course, prereq] = prerequisites[i];
//         if (course === prereq) return false;
//         if (!courseprereqs.has(course)) {
//             courseprereqs.set(course, [prereq]);
//         } else {
//             let prereqs = courseprereqs.get(course);
//             prereqs.push(prereq);
//             courseprereqs.set(course, prereqs);
//         }
//     }

//     const dfs = (course, visited) => {
//         if (!courseprereqs.has(course)) {
//             passed.add(course);
//             return true;
//         }

//         if (passed.has(course)) {
//             return true;
//         }

//         if (visited.has(course)) return false;

//         visited.add(course);

//         const prereqs = courseprereqs.get(course);

//         for (let j = 0; j < prereqs.length; j++) {
//             if (!dfs(prereqs[j], visited)) {
//                 return false;
//             }
//         }
        
//         passed.add(course);
//         return true;
//     }

//     for (let i = 0; i < numCourses; i++) {
//         const visited = new Set();
//         if (!dfs(i, visited)) {
//             return false;
//         }
//     }

//     return true;
// };