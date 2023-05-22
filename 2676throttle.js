// https://leetcode.com/problems/throttle/

var throttle = function (fn, t) {
    let storedArgs;
    let delay;
    let timeout;
    return function (...args) {
        if (!delay) {
            delay = Date.now() + t;
            return fn(...args);
        } else if (Date.now() < delay) {
            if (!storedArgs) {
                storedArgs = args;
                timeout = setTimeout(() => {
                    delay = Date.now() + t;
                    return fn(...storedArgs);
                }, delay - Date.now());
            } else {
                storedArgs = args;
                clearTimeout(timeout);
                timeout = setTimeout(() => {
                    delay = Date.now() + t;
                    return fn(...storedArgs);
                }, delay - Date.now());
            }
        } else if (Date.now() > delay) {
            delay = Date.now() + t;
            return fn(...args);
        }
    }
};