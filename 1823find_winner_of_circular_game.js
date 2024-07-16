// https://leetcode.com/problems/find-the-winner-of-the-circular-game/

const { Queue } = require('@datastructures-js/queue');

var findTheWinner = function(n, k) {
    const queue = new Queue();
    for (let i = 1; i <= n; i++) {
        queue.enqueue(i);
    }

    while (queue.size() > 1) {
        for (let i = 0; i < k - 1; i++) {
            queue.enqueue(queue.dequeue());
        }
        queue.dequeue();
    }

    return queue.dequeue();
};


var findTheWinner = function(n, k) {
    const helper = (length) => {
        if (length === 1) {
            return 0;
        }
        return (helper(length - 1) + k) % length;
    }
    return helper(n) + 1;
};


var findTheWinner = function(n, k) {
    let res = 0;

    for (let i = 1; i <= n; i++) {
        res = (res + k) % i;
    }

    return res + 1;
};