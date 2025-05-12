// https://leetcode.com/problems/domino-and-tromino-tiling/

var numTilings = function(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;
    if (n === 3) return 5;

    let one = 1;
    let two = 2;
    let three = 5;

    for (let i = 4; i <= n; i++) {
        const temp = three;
        const temp2 = two;
        three = (three * 2 + one) % (1e9 + 7);
        two = temp;
        one = temp2;
    }

    return three;
};


var numTilings = function(n) {
    const cache = Array(n * 2).fill(-1);
    const mod = 1e9 + 7;

    const dp = (layer) => {
        if (layer === n * 2) {
            return 1;
        } 
        if (layer > n * 2) {
            return 0;
        }

        if (cache[layer] !== -1) {
            return cache[layer];
        }

        if (layer % 2 === 0) {
            tot = (dp(layer + 2) + dp(layer + 4) + dp(layer + 3) * 2) % mod;
        } else {
            tot = (dp(layer + 3) + dp(layer + 2)) % mod;
        }

        cache[layer] = tot;

        return tot;
    }

    return dp(0);
};