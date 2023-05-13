// https://leetcode.com/problems/allow-one-function-call/

var once = function(fn) {
    let called = false;
    return function(...args){
        if (!called) {
            called = true;
            return fn(...args);
        }
    }
};