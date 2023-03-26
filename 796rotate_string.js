// https://leetcode.com/problems/rotate-string/

var rotateString = function(s, goal) {
    if (s == goal) {
        return true;
    }
    let arr = s.split('');
    for (let i = 1; i <= s.length-1; i++) {
        const first = arr[0];
        arr.push(first);
        arr.shift();
        const join = arr.join('');
        if (join == goal) {
            return true;
        }
    }
    return false;
};