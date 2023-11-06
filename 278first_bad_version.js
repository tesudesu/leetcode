// https://leetcode.com/problems/first-bad-version/

var solution = function(isBadVersion) {
    return function(n) {
        let start = 1;
        let end = n;

        while (start < end) {
            const mid = Math.floor((end - start) / 2) + start;

            if (isBadVersion(mid)) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }

        return end;
    };
};