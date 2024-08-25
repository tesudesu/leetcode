// https://leetcode.com/problems/2-keys-keyboard/

var minSteps = function(n) {
    const cache = Array(n + 1).fill().map(() => Array(n + 1).fill(-1));

    const dp = (curr, copied) => {
        if (curr === n) {
            return 0;
        }
        if (curr > n) {
            return Infinity;
        }

        if (cache[curr][copied] !== -1) {
            return cache[curr][copied];
        }

        // copy
        let copy = Infinity;

        if (curr !== copied) {
            copy = dp(curr, curr) + 1;
        }

        let paste = Infinity;

        // paste
        if (copied) {
            paste = dp(curr + copied, copied) + 1;
        }

        let ans = Math.min(copy, paste);

        cache[curr][copied] = ans;

        return ans;
    }

    return dp(1, 0);
};