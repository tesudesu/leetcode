// https://leetcode.com/problems/freedom-trail/

var findRotateSteps = function(ring, key) {
    const cache = Array(ring.length).fill().map(() => Array(key.length).fill(-1));

    const dp = (ringIndex, keyIndex) => {
        if (keyIndex === key.length) {
            return 0;
        }

        if (cache[ringIndex][keyIndex] !== -1) {
            return cache[ringIndex][keyIndex];
        }

        let min = Infinity;
        for (let i = 0; i < ring.length; i++) {
            if (ring[i] === key[keyIndex]) {
                const minDist = Math.min(Math.abs(i - ringIndex), ring.length - Math.abs(i - ringIndex));
                min = Math.min(min, dp(i, keyIndex + 1) + minDist);
            }
        }

        cache[ringIndex][keyIndex] = min;

        return min;
    }

    return dp(0, 0) + key.length;
};


var findRotateSteps = function (ring, key) {
    let dp = Array(ring.length).fill(0);

    for (let i = key.length - 1; i >= 0; i--) {
        let newRow = Array(ring.length).fill(Infinity);
        for (let j = 0; j < ring.length; j++) {
            for (let k = 0; k < ring.length; k++) {
                if (ring[k] === key[i]) {
                    const minDist = Math.min(Math.abs(k - j), ring.length - Math.abs(k - j));
                    newRow[j] = Math.min(newRow[j], minDist + dp[k]);
                    
                }
            }
        }
        dp = newRow;
    }

    return dp[0] + key.length;
};