// https://leetcode.com/problems/diagonal-traverse-ii/

var findDiagonalOrder = function(nums) {
    let entries = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums[i].length; j++) {
            entries.push([i + j, i, nums[i][j]]);
        }
    }
    
    console.log(...entries)

    entries.sort((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            if (a[1] > b[1]) {
                return -1;
            } else {
                return 1;
            }
        }
    });

    return entries.map(a => a[2]);
};

console.log(findDiagonalOrder(nums = [[1,2,3],[4,5,6],[7,8,9]]))

// BFS

// const { Queue } = require('@datastructures-js/queue');

// var findDiagonalOrder = function(nums) {
//     const queue = new Queue();
//     queue.enqueue([0, 0]);
//     let res = [];

//     while (!queue.isEmpty()) {
//         const length = queue.size();
//         for (let i = 0; i < length; i++) {
//             const [x, y] = queue.dequeue();
//             res.push(nums[x][y]);
//             if (y === 0 && x + 1 < nums.length) {
//                 queue.enqueue([x + 1, y]);
//             }
//             if (y + 1 < nums[x].length) {
//                 queue.enqueue([x, y + 1]);
//             }
//         }
//     }

//     return res;
// };