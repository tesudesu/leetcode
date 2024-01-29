// https://leetcode.com/problems/unique-number-of-occurrences/

var uniqueOccurrences = function(arr) {
    const freq = new Map();

    for (let i = 0; i < arr.length; i++) {
        freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
    }

    const seenFreq = new Set();

    for (const [num, count] of freq) {
        if (seenFreq.has(count)) {
            return false;
        }
        seenFreq.add(count);
    }

    return true;
};


var uniqueOccurrences = function(arr) {
    let occurrences = {};
    for (let i = 0; i < arr.length; i++) {
        if (!occurrences[arr[i]]) {
            occurrences[arr[i]] = 1;
        } else {
            occurrences[arr[i]]++;
        }
    }
    const occur = Object.values(occurrences);
    const occurSet = new Set(occur);
    return occurSet.size === occur.length;
};