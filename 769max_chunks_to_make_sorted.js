// https://leetcode.com/problems/max-chunks-to-make-sorted/

var maxChunksToSorted = function(arr) {
    let chunks = 0;
    let max = -1;

    for (let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
        if (max === i) {
            chunks++;
        }
    }

    return chunks;
};


// var maxChunksToSorted = function(arr) {
//     let min = 0;
//     let chunks = 0;
//     let i = 0;
//     let j = 0;

//     while (i < arr.length) {
//         let seen = new Set();
//         chunks++;
//         let max = -Infinity;
//         while (j < arr.length) {
//             max = Math.max(max, arr[j]);
//             seen.add(arr[j]);
//             let ok = true;
//             for (let k = min; k <= max; k++) {
//                 if (!seen.has(k)) {
//                     ok = false;
//                     break;
//                 }
//             }
//             j++;
//             if (ok) {
//                 break;
//             }
//         }
//         i = j;
//         min = max + 1;
//     }

//     return chunks;
// };