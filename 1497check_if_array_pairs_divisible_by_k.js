// https://leetcode.com/problems/check-if-array-pairs-are-divisible-by-k/

var canArrange = function(arr, k) {
    let modFreq = new Map();

    for (let i = 0; i < arr.length; i++) {
        let mod = ((arr[i] % k) + k) % k;
        modFreq.set(mod, (modFreq.get(mod) + 1) || 1);
    }

    for (const [mod, freq] of modFreq) {
        let remain = k - mod;
        if (mod === 0 || mod === remain) {
            if (freq % 2 !== 0) {
                return false;
            }
        } else {
            if (!modFreq.has(remain) || modFreq.get(remain) !== freq) {
                return false;
            }
        }
    }

    return true;
};