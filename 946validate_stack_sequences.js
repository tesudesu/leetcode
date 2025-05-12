// https://leetcode.com/problems/validate-stack-sequences/

var validateStackSequences = function(pushed, popped) {
    let arr = [];
    const n = pushed.length;

    let i = 0;
    let j = 0;

    while (i < n || j < n) {
        if (j < n && arr.length !== 0 && arr[arr.length - 1] === popped[j]) {
            arr.pop();
            j++;
        } else if (i < n) {
            arr.push(pushed[i]);
            i++;
        } else {
            return false;
        }
    }

    if (arr.length === 0 && i === pushed.length && j === popped.length) {
        return true;
    }

    return false;
};