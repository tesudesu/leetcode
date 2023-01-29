// https://leetcode.com/problems/number-of-segments-in-a-string/

// SOLUTION 1

var countSegments = function(s) {
    if (!/\S/g.test(s)) {
        return 0;
    } else {
        return s.trim().split(/\s+/).length;
    }
};

// SOLUTION 2

var countSegments = function(s) {
    let split = s.split(/\s+/);
    let total = 0;
    for (let i = 0; i < split.length; i++) {
        if (/\S/g.test(split[i])) {
            total++;
        }
    }
    return total;
};