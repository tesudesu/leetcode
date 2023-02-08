// https://leetcode.com/problems/student-attendance-record-i/

var checkRecord = function(s) {
    if (/L{3,}/.test(s)) {
        return false;
    }
    const match = s.match(/A/g);
    if (match != null && match.length >= 2) {
        return false;
    }
    return true;
};