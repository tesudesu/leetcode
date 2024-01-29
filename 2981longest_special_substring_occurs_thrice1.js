// https://leetcode.com/problems/find-longest-special-substring-that-occurs-thrice-i/

var maximumLength = function(s) {
    const isSpecial = (start, end) => {
        for (let i = start + 1; i <= end; i++) {
            if (s[i] !== s[i - 1]) {
                return false;
            }
        }
        return true;
    }

    let ans = -1;

    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            const length = j - i + 1;

            if (j + 2 > s.length) break;
            if (!isSpecial(i, j)) break;

            let times = 0;

            for (let k = i + 1; k < s.length; k++) {
                let found = true;
                for (let q = k; q < k + length; q++) {
                    if (s[q] !== s[i]) {
                        found = false;
                        break;
                    }
                }
                if (found) {
                    times++;
                }
                if (times === 2) {
                    ans = Math.max(ans, length);
                    break;
                }
            }
        }
    }

    return ans;
};