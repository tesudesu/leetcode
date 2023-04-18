// https://leetcode.com/problems/buddy-strings/

var buddyStrings = function(s, goal) {
    if (s.length !== goal.length) {
        return false;
    }
    let sCopy = s.split('');
    let indices = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== goal[i]) {
            indices.push(i);
            indices.push(s[i]);
        }
    }
    if (indices.length === 4) {
        sCopy[indices[0]] = indices[3];
        sCopy[indices[2]] = indices[1];
        return sCopy.join('') === goal;
    } else if (indices.length === 0) {
        const set = new Set(sCopy);
        return set.size !== sCopy.length;
    }
    return false;
};