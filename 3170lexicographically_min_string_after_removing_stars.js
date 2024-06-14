// https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/

var clearStars = function(s) {
    const priorityQueue = new PriorityQueue((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] > b[1] ? -1 : 1;
        }
    });

    const toDelete = new Set();

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "*") {
            const [letter, index] = priorityQueue.dequeue();
            toDelete.add(index);
            toDelete.add(i);
        } else {
            priorityQueue.enqueue([s.charCodeAt(i) - 97, i]);
        }
    }

    let ans = [];

    for (let i = 0; i < s.length; i++) {
        if (toDelete.has(i)) {
            continue;
        }
        ans.push(s[i]);
    }

    return ans.join("");
};