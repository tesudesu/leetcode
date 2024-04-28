// https://leetcode.com/problems/open-the-lock/

var openLock = function(deadends, target) {
    const queue = new Queue();
    queue.enqueue("0000");
    const dead = new Set(deadends);
    const visited = new Set();
    visited.add("0000");
    let steps = 0;

    const nextNode = {
        "0": ["9", "1"],
        "1": ["0", "2"],
        "2": ["1", "3"],
        "3": ["2", "4"],
        "4": ["3", "5"],
        "5": ["4", "6"],
        "6": ["5", "7"],
        "7": ["6", "8"],
        "8": ["7", "9"],
        "9": ["8", "0"]
    }

    while (!queue.isEmpty()) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const curr = queue.dequeue();
            if (curr === target) {
                return steps;
            }
            if (dead.has(curr)) {
                continue;
            }

            for (const nextDigit of nextNode[curr[0]]) {
                const nextStr = nextDigit + curr[1] + curr[2] + curr[3];
                if (!visited.has(nextStr)) {
                    queue.enqueue(nextStr);
                    visited.add(nextStr);
                }
            }
            for (const nextDigit of nextNode[curr[1]]) {
                const nextStr = curr[0] + nextDigit + curr[2] + curr[3];
                if (!visited.has(nextStr)) {
                    queue.enqueue(nextStr);
                    visited.add(nextStr);
                }
            }
            for (const nextDigit of nextNode[curr[2]]) {
                const nextStr = curr[0] + curr[1] + nextDigit + curr[3];
                if (!visited.has(nextStr)) {
                    queue.enqueue(nextStr);
                    visited.add(nextStr);
                }
            }
            for (const nextDigit of nextNode[curr[3]]) {
                const nextStr = curr[0] + curr[1] + curr[2] + nextDigit;
                if (!visited.has(nextStr)) {
                    queue.enqueue(nextStr);
                    visited.add(nextStr);
                }
            }
        }

        steps++;
    }

    return -1;
};