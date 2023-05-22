// https://leetcode.com/problems/curry/

var curry = function(fn) {
    return function curried(...args) {
        if (fn.length == args.length) {
            return fn(...args);
        }
        return (...nextArgs) => curried(...args, ...nextArgs);
    };
};