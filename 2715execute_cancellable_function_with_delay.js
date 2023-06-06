// https://leetcode.com/problems/execute-cancellable-function-with-delay/

var cancellable = function(fn, args, t) {
    let runFn = setTimeout(() => {
        fn(...args);
    }, t);

    return function cancelFn() {
        clearTimeout(runFn);
    };
};