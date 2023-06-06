// https://leetcode.com/problems/nested-array-generator/

var inorderTraversal = function*(arr) {
    let stack = arr.reverse();

    while (stack.length > 0) {
        const curr = stack.pop();
        if (!Array.isArray(curr)) {
            yield curr;
        } else {
            stack.push(...curr.reverse());
        }
    }
};

// var inorderTraversal = function*(arr) {
//     let stack = arr;

//     while (stack.length > 0) {
//         if (!Array.isArray(stack[0])) {
//             yield stack[0];
//         } else {
//             stack.unshift(...stack[0]);
//         }
//     }
// };

// var inorderTraversal = function*(arr) {
//     if (!Array.isArray(arr)) {
//         yield arr;
//     }

//     for (let i = 0; i < arr.length; i++) {
//         yield* inorderTraversal(arr[i]);
//     }
// };