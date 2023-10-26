// https://leetcode.com/problems/pairs-of-songs-with-total-durations-divisible-by-60/

var numPairsDivisibleBy60 = function(time) {
    let freq = new Map();

    let tot = 0;

    for (let i = 0; i < time.length; i++) {
        let remainder = time[i] % 60;
        if (remainder === 0) {
            if (freq.has(0)) {
                tot += freq.get(0);
            }
        } else if (freq.has(60 - remainder)) {
            tot += freq.get(60 - remainder);
        }
        freq.set(remainder, freq.get(remainder) + 1 || 1);
    }

    return tot;
};