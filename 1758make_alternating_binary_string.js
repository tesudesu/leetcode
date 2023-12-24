// https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/

var minOperations = function(s) {
    let ops1 = 0;

    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 0) {
            if (s[i] !== "0") {
                ops1++;
            }
        } else {
            if (s[i] !== "1") {
                ops1++;
            }
        }
    }

    return Math.min(ops1, s.length - ops1);
};


// var minOperations = function(s) {
//     let ops1 = 0;
//     let ops2 = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (i % 2 === 0) {
//             if (s[i] !== "0") {
//                 ops1++;
//             }
//         } else {
//             if (s[i] !== "1") {
//                 ops1++;
//             }
//         }
//     }

//     for (let i = 0; i < s.length; i++) {
//         if (i % 2 === 0) {
//             if (s[i] !== "1") {
//                 ops2++;
//             }
//         } else {
//             if (s[i] !== "0") {
//                 ops2++;
//             }
//         }
//     }

//     return Math.min(ops1, ops2);
// };