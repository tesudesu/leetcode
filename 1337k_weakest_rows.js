// https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/

var kWeakestRows = function(mat, k) {
    let strengths = Array(mat.length).fill(0);

    for (let i = 0; i < mat.length; i++) {
        let soldiers = mat[0].length;
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                soldiers = j;
                break;
            }
        }
        strengths[i] = [soldiers, i];
    }

    strengths.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            if (a[1] <= b[1]) {
                return -1;
            } else {
                return 1;
            }
        }
    });

    let res = [];

    for (let i = 0; i < k; i++) {
        res.push(strengths[i][1]);
    }

    return res;
};


// const { PriorityQueue } = require('@datastructures-js/priority-queue');

// var kWeakestRows = function (mat, k) {
//     let minQueue = new PriorityQueue((a, b) => {
//         if (a[0] < b[0]) {
//             return -1;
//         } else if (a[0] > b[0]) {
//             return 1;
//         } else {
//             if (a[1] <= b[1]) {
//                 return -1;
//             } else {
//                 return 1;
//             }
//         }
//     });

//     for (let i = 0; i < mat.length; i++) {
//         let soldiers = mat[0].length;
//         for (let j = 0; j < mat[0].length; j++) {
//             if (mat[i][j] === 0) {
//                 soldiers = j;
//                 break;
//             }
//         }
//         minQueue.enqueue([soldiers, i]);
//     }

//     let res = [];

//     for (let i = 0; i < k; i++) {
//         res.push(minQueue.dequeue()[1]);
//     }

//     return res;
// };