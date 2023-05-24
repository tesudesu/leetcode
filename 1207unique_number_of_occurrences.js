// https://leetcode.com/problems/unique-number-of-occurrences/

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