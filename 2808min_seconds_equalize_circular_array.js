// https://leetcode.com/problems/minimum-seconds-to-equalize-a-circular-array/

var minimumSeconds = function(nums) {
    const freqs = {};

    for (let i = 0; i < nums.length; i++) {
        if (!freqs[nums[i]]) {
            freqs[nums[i]] = [i];
        } else {
            freqs[nums[i]].push(i);
        }
    }

    let min = Infinity;

    for (const key in freqs) {
        const indices = freqs[key];
        if (indices.length === 1) {
            min = Math.min(min, Math.floor(nums.length / 2));
            continue;
        }

        let maxSeconds = 0;

        for (let i = 1; i < indices.length; i++) {
            maxSeconds = Math.max(maxSeconds, Math.floor((indices[i] - indices[i - 1]) / 2));
            if (i === indices.length - 1) {
                maxSeconds = Math.max(maxSeconds, Math.floor((nums.length - (indices[i] - indices[0])) / 2));
            }
        }

        min = Math.min(min, maxSeconds);
    }

    return min;
};