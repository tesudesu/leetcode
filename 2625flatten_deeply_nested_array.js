// https://leetcode.com/problems/flatten-deeply-nested-array/

var flat = function (arr, n) {
    let res = [];
    const flattening = (nums, k) => {
        for (const num of nums) {
            if (Array.isArray(num) && k > 0 && k <= n) {
                flattening(num, k-1);
            } else {
                res.push(num);
            }
        }
    }
    flattening(arr, n);
    return res; 
};


// var flat = function (arr, n) {
//     let hasNestedArray = true;
//     let queue;
//     let depth = 0;

//     while(hasNestedArray && depth < n) {
//         hasNestedArray = false;
//         queue = [];
        
//         for (let i = 0; i < arr.length; i++) {
//             if (Array.isArray(arr[i])) {
//                 queue.push(...arr[i]);
//                 hasNestedArray = true;
//             } else {
//                 queue.push(arr[i]);
//             }
//         }

//         arr = queue;
//         depth++;
//     }

//     return arr;
// };


// var flat = function (arr, n) {
//     const stack = [...arr.map(item => [item, n])];
//     let res = [];

//     while (stack.length > 0) {
//         const [item, depth] = stack.shift();
//         if (Array.isArray(item) && depth > 0) {
//             stack.unshift(...item.map(ele => [ele, depth-1]));
//         } else {
//             res.push(item);
//         }
//     }

//     return res;
// };