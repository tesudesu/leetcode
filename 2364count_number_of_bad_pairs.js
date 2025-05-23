// https://leetcode.com/problems/count-number-of-bad-pairs/

var countBadPairs = function(nums) {
    let n = nums.length;

    let numMinusIndex = new Map();

    for (let i = 0; i < n; i++) {
        let num = nums[i] - i;
        numMinusIndex.set(num, (numMinusIndex.get(num) + 1) || 1);
    }

    let tot = 0;

    for (const [num, count] of numMinusIndex) {
        let remainder = n - count;
        tot += count * remainder;
    }

    return tot / 2;
};


var countBadPairs = function(nums) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = nums[i] - i;
        if (map.has(diff)) {
            map.set(diff, map.get(diff) + 1);
        } else {
            map.set(diff, 1);
        }
    }

    let totPairs = 0;

    if (map.size === 1) return totPairs;

    for (let i = nums.length - 1; i >= 1; i--) {
        totPairs += i;
    }

    for (const pair of map) {
        let goodPairs = 0;
        for (let i = pair[1] - 1; i >= 1; i--) {
            goodPairs += i;
        }
        totPairs -= goodPairs;
    }

    return totPairs;
};