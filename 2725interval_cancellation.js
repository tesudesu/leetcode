// https://leetcode.com/problems/interval-cancellation/

var cancellable = function(fn, args, t) {
    setTimeout(() => {
        fn(...args);
    }, 0);

    let interval = setInterval(() => {
        fn(...args);
    }, t);

    return function () {
        clearInterval(interval);
    };
};