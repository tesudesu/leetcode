// https://leetcode.com/problems/long-pressed-name/

var isLongPressedName = function(name, typed) {
    let ind = 0;
    if (typed[typed.length-1] !== name[name.length-1]) {
        return false;
    }
    for (let i = 0; i < typed.length; i++) {
        if (typed[i] === name[ind]) {
            ind++;
        } else {
            ind--;
            if (typed[i] === name[ind]) {
                ind++;
            } else {
                return false;
            }
        }
    }
    return ind === name.length;
};