// https://leetcode.com/problems/function-composition/

var compose = function(functions) {
	return function(x) {
        for (let i = 0; i < functions.length; i++) {
            x = functions[i](x);
        }
        return x;
    }
};