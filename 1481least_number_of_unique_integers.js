// https://leetcode.com/problems/least-number-of-unique-integers-after-k-removals/

// Counting sort, O(n) time

var findLeastNumOfUniqueInts = function(arr, k) {
    const map = new Map();

    for (let i = 0; i < arr.length; i++) {
        map.set(arr[i], (map.get(arr[i]) + 1) || 1);
    }

    const counts = Array(arr.length + 1).fill(0);

    for (const [val, freq] of map) {
        counts[freq]++;
    }

    let totRemoved = 0;

    for (let i = 1; i < counts.length; i++) {
        const removed = Math.min(Math.floor(k / i) * i, counts[i] * i);
        totRemoved += removed / i;
        k -= removed;

        if (k < i) {
            return map.size - totRemoved;
        }
    }

    return 0;
};


// var findLeastNumOfUniqueInts = function(arr, k) {
//     const map = new Map();

//     for (let i = 0; i < arr.length; i++) {
//         map.set(arr[i], (map.get(arr[i]) + 1) || 1);
//     }

//     if (k === 0) return map.size;

//     let counts = [...map.entries()];
//     counts.sort((a, b) => a[1] - b[1]);

//     let i = 0;

//     while (k > 0) {
//         k -= counts[i][1];
//         if (k <= 0) {
//             break;
//         }
//         i++;
//     }

//     if (k < 0) {
//         return counts.length - i;
//     } else {
//         return counts.length - i - 1;
//     }
// };