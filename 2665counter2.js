// https://leetcode.com/problems/counter-ii/

var createCounter = function(init) {
    let n = init;
    const increment = () => {
        return ++n;
    }
    const decrement = () => {
        return --n;
    }
    const reset = () => {
        return n = init;
    }
    return { increment, decrement, reset };
};