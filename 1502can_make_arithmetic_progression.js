// https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/

var canMakeArithmeticProgression = function(arr) {
    arr.sort((a, b) => (a - b));
    let diff = arr[1] - arr[0];

    for (let i = 2; i < arr.length; i++) {
        if (arr[i] - arr[i-1] !== diff) return false;
    }
    return true;
};

// var canMakeArithmeticProgression = function(arr) {
//     const min = Math.min(...arr);
//     const max = Math.max(...arr);

//     if ((max - min) % (arr.length - 1) !== 0) return false;
//     const diff = (max - min) / (arr.length - 1);

//     if (diff === 0) return true;

//     let i = 0;
//     while (i < arr.length) {
//         const shouldPosition = (arr[i] - min) / diff;
//         if (shouldPosition !== i) {
//             if (arr[i] === arr[shouldPosition]) return false;
//             const temp = arr[i];
//             arr[i] = arr[shouldPosition];
//             arr[shouldPosition] = temp;
//         } else {
//             i++;
//         }
//     }

//     return arr;
// };