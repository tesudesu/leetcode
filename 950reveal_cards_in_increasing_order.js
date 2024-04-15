// https://leetcode.com/problems/reveal-cards-in-increasing-order/

const { Queue } = require('@datastructures-js/queue');

var deckRevealedIncreasing = function(deck) {
    const queue = new Queue();
    for (let i = 0; i < deck.length; i++) {
        queue.enqueue(i);
    }
    deck.sort((a, b) => a - b);

    const ans = Array(deck.length).fill();

    for (let i = 0; i < deck.length; i++) {
        const index = queue.dequeue();
        ans[index] = deck[i];
        queue.enqueue(queue.dequeue());
    }

    return ans;
};


var deckRevealedIncreasing = function(deck) {
    deck.sort((a, b) => a - b);

    let i = 0;
    let j = 0;

    const ans = Array(deck.length).fill();

    while (i < deck.length) {
        ans[j] = deck[i];
        i++;
        let empty = 0;
        while (i < deck.length && empty < 2) {
            j++;
            if (j === ans.length) {
                j = 0;
            }
            if (!ans[j]) {
                empty++;
            }
        }
    }

    return ans;
};