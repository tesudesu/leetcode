// https://leetcode.com/problems/maximum-enemy-forts-that-can-be-captured/

var captureForts = function (forts) {
    let start;
    let from = 0;
    let max = 0;
    for (let i = 0; i < forts.length; i++) {
        if (forts[i] === 1) {
            if (from === -1) {
                let captured = i - start - 1;
                if (captured > max) {
                    max = captured;
                }
            }
            start = i;
            from = 1;
        }
        if (forts[i] === -1) {
            if (from === 1) {
                let captured = i - start - 1;
                if (captured > max) {
                    max = captured;
                }
            }
            start = i;
            from = -1;
        }
    }
    return max;
};

// var captureForts = function(forts) {
//     let start = -2;
//     let max = 0;
//     for (let i = 0; i < forts.length; i++) {
//         if (forts[i] === 1) {
//             start = i;
//         }
//         if (forts[i] === -1) {
//             if (start !== -2) {
//                 let captured = i - start - 1;
//                 if (captured > max) {
//                     max = captured;
//                 }
//                 start = -2;
//             }
//         }
//     }
//     for (let i = forts.length-1; i >= 0; i--) {
//         if (forts[i] === 1) {
//             start = i;
//         }
//         if (forts[i] === -1) {
//             if (start !== -2) {
//                 let captured = start - i - 1;
//                 if (captured > max) {
//                     max = captured;
//                 }
//                 start = -2;
//             }
//         }
//     }
//     return max;
// };