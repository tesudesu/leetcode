// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-subarrays/

var canBeEqual = function(target, arr) {
    const targetMap = new Map();
    const arrMap = new Map();

    for (const num of target) {
        targetMap.set(num, (targetMap.get(num) + 1) || 1);
    }

    for (const num of arr) {
        arrMap.set(num, (arrMap.get(num) + 1) || 1);
    }

    for (const [num, count] of targetMap) {
        if (!arrMap.has(num) || arrMap.get(num) !== count) {
            return false;
        }
    }

    return true;
};