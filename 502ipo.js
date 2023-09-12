// https://leetcode.com/problems/ipo/

const { MaxPriorityQueue } = require("@datastructures-js/priority-queue");

var findMaximizedCapital = function(k, w, profits, capital) {
    let pc = profits.map((profit, i) => [profit, capital[i]]);

    pc.sort((a, b) => a[1] - b[1]);

    const maxQueue = new MaxPriorityQueue();

    let ind = 0;

    for (let i = 0; i < k; i++) {
        while (ind < pc.length) {
            if (pc[ind][1] <= w) {
                maxQueue.enqueue(pc[ind][0]);
                ind++;
            } else {
                break;
            }
        }

        if (maxQueue.isEmpty()) return w;

        w += maxQueue.dequeue();
    }

    return w;
};


// var findMaximizedCapital = function(k, w, profits, capital) {
//     const pc = profits.map((val, i) => [val, capital[i]]);

//     const maxQueue = new MaxPriorityQueue({ priority: (elem) => elem[0] });

//     for (let i = 0; i < pc.length; i++) {
//         maxQueue.enqueue(pc[i]);
//     }

//     let tot = w;

//     for (let i = 0; i < k; i++) {
//         let temp = [];
//         while (!maxQueue.isEmpty()) {
//             const curr = maxQueue.dequeue().element;
//             if (curr[1] <= tot) {
//                 tot += curr[0];
//                 for (let j = 0; j < temp.length; j++) {
//                     maxQueue.enqueue(temp[j]);
//                 }
//                 break;
//             }
//             temp.push(curr);
//         }
//     }

//     return tot;
// };