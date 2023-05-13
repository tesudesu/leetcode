// https://leetcode.com/problems/memoize/

function memoize(fn) {
    let calls = {};
    return function(...args) {
        if (calls.hasOwnProperty(args)) {
            return calls[args];
        } else {
            const result = fn(...args);
            calls[args] = result;
            return result;
        }
    }
}

// function memoize(fn) {
//     let calls = {};
//     return function(...args) {
//         const str = JSON.stringify(args);
//         if (calls.hasOwnProperty(str)) {
//             return calls[str];
//         } else {
//             const result = fn(...args);
//             calls[str] = result;
//             return result;
//         }
//     }
// }