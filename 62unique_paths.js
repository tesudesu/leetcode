// https://leetcode.com/problems/unique-paths/

var uniquePaths = function (m, n) {
    let cache = {"2,2": 2};

    const dp = (m, n) => {
        let string;
        if (m <= n) {
            string = `${m},${n}`;
        } else {
            string = `${n},${m}`;
        }

        if (m === 1 || n === 1) {
            return 1;
        }

        if (cache[string]) {
            return cache[string];
        }

        const result = dp(m-1, n) + dp(m, n-1);
        cache[string] = result;
        return result;
    }

    return dp(m, n);
};