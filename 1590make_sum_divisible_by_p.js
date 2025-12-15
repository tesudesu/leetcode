// https://leetcode.com/problems/make-sum-divisible-by-p/

var minSubarray = function(nums, p) {
    let tot = 0;

    for (const num of nums) {
        tot += num;
    }

    const targetRemain = tot % p;

    if (targetRemain === 0) return 0;

    const map = new Map();
    map.set(0, -1);
    let prefixSumMod = 0;
    let toRemove = nums.length;

    for (let i = 0; i < nums.length; i++) {
        prefixSumMod = (prefixSumMod + nums[i]) % p;
        let need = (prefixSumMod - targetRemain + p) % p;
        if (map.has(need)) {
            toRemove = Math.min(toRemove, i - map.get(need));
        }
        map.set(prefixSumMod, i);
    }

    return toRemove === nums.length ? -1 : toRemove;
};