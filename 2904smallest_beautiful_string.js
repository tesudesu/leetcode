// https://leetcode.com/problems/shortest-and-lexicographically-smallest-beautiful-string/

var shortestBeautifulSubstring = function(s, k) {
    let start = 0;

    while (s[start] === "0") {
        start++;
    }

    let left = start;

    let count = 0;

    let substring = [-1, -1];
    let substringLength = Infinity;

    for (let i = start; i < s.length; i++) {
        if (s[i] === "1") {
            if (count < k) {
                count++;
            }
            if (count === k) {
                if (i - left + 1 < substringLength) {
                    substring = [left, i];
                    substringLength = i - left + 1;
                } else if (i - left + 1 === substringLength) {
                    let prevStr = s.slice(substring[0], substring[1] + 1);
                    let currStr = s.slice(left, i + 1);
                    if (currStr < prevStr) {
                        substring = [left, i];
                    }
                }
                count--;
                left++;
                while (s[left] === "0") {
                    left++;
                }
            }
        } 
    }

    if (substringLength === Infinity) {
        return "";
    } else {
        return s.slice(substring[0], substring[1] + 1);
    }
};