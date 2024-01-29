// https://leetcode.com/problems/count-elements-with-maximum-frequency/

var maxFrequencyElements = function(nums) {
    let maxFreq = 1;
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    for (const [num, freq] of map) {
        maxFreq = Math.max(maxFreq, freq);
    }

    let tot = 0;

    for (const [num, freq] of map) {
        if (freq === maxFreq) {
            tot += freq;
        }
    }

    return tot;
};