// https://leetcode.com/problems/minimum-size-subarray-in-infinite-array/

var minSizeSubarray = function(nums, target) {
    let tot = 0;

    for (let i = 0; i < nums.length; i++) {
        tot += nums[i];
    }

    let map = new Map();

    let prefixSum = Array(nums.length * 2).fill();
    prefixSum[0] = nums[0];
    map.set(prefixSum[0], 0);
    map.set(0, -1);

    for (let i = 1; i < prefixSum.length; i++) {
        prefixSum[i] = prefixSum[i - 1] + nums[i % nums.length];
        map.set(prefixSum[i], i);
    }

    let complete = Math.floor(target / tot) * nums.length;
    target = target % tot;
    if (target === 0) return complete;

    let min = Infinity;

    for (let i = 0; i < prefixSum.length; i++) {
        if (map.has(prefixSum[i] - target)) {
            min = Math.min(min, i - map.get(prefixSum[i] - target));
        }
    }

    return min === Infinity ? -1 : complete + min;
};