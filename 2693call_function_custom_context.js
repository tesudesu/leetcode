// https://leetcode.com/problems/call-function-with-custom-context/

Function.prototype.callPolyfill = function(context, ...args) {
    const bound = this.bind(context);
    return bound(...args);
}