// https://leetcode.com/problems/jump-game-iv/

const { Queue } = require('@datastructures-js/queue');

var minJumps = function(arr) {
    if (arr.length === 1) return 0;

    let indices = new Map();

    for (let i = 0; i < arr.length; i++) {
        if (indices.has(arr[i])) {
            let array = indices.get(arr[i]);
            array.push(i);
            indices.set(arr[i], array);
        } else {
            indices.set(arr[i], [i]);
        }
    }

    const queue = new Queue();
    queue.enqueue(0);

    let steps = 0;
    let visited = Array(arr.length).fill(false);
    visited[0] = true;

    while (queue.size() > 0) {
        const length = queue.size();
        for (let i = 0; i < length; i++) {
            const curr = queue.dequeue();
            if (curr - 1 >= 0 && !visited[curr - 1]) {
                queue.enqueue(curr - 1);
                visited[curr - 1] = true;
            }
            if (curr + 1 < arr.length && !visited[curr + 1]) {
                if (curr + 1 === arr.length - 1) return steps + 1;
                queue.enqueue(curr + 1);
                visited[curr + 1] = true;
            }
            if (indices.has(arr[curr])) {
                const index = indices.get(arr[curr]);
                for (let j = 0; j < index.length; j++) {
                    if (index[j] === arr.length - 1) return steps + 1;
                    if (!visited[index[j]]) {
                        queue.enqueue(index[j]);
                        visited[index[j]] = true;
                    }
                }
                indices.delete(arr[curr]);
            }
        }
        steps++;
    }
};