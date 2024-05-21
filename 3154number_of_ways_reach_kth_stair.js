// https://leetcode.com/problems/find-number-of-ways-to-reach-the-k-th-stair/

var waysToReachStair = function(k) {
    const cache = new Map();

    const dp = (stair, jump, lastIsOp1) => {
        if (stair === k) {
            let useOp1 = 0;
            if (!lastIsOp1) {
                useOp1 = dp(stair - 1, jump, true);
            }

            let useOp2 = dp(stair + Math.pow(2, jump), jump + 1, false);
            return 1 + useOp1 + useOp2;
        }
        if (stair > k && lastIsOp1) {
            return 0;
        }
        if (stair > k + 1) {
            return 0;
        }
        if (stair < 0) {
            return 0;
        }

        let str = `${stair}, ${jump}, ${lastIsOp1}`;

        if (cache.has(str)) {
            return cache.get(str);
        }

        let useOp1 = 0;
        if (!lastIsOp1) {
            useOp1 = dp(stair - 1, jump, true);
        }

        let useOp2 = dp(stair + Math.pow(2, jump), jump + 1, false);

        let ans = useOp1 + useOp2;

        cache.set(str, ans);

        return ans;
    }

    return dp(1, 0, false);
};