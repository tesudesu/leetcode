// https://leetcode.com/problems/promise-time-limit/

var timeLimit = function(fn, t) {
	return async function(...args) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject('Time Limit Exceeded');
            }, t);
            fn(...args).then(resolve).catch(reject);
        });
    }
};

// var timeLimit = function(fn, t) {
// 	return async function(...args) {
//         const rejectPromise = new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 reject('Time Limit Exceeded');
//             }, t);
//         });
//         return Promise.race([rejectPromise, fn(...args)]);
//     }
// };