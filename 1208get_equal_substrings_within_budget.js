// https://leetcode.com/problems/get-equal-substrings-within-budget/

var equalSubstring = function(s, t, maxCost) {
    const costs = Array(s.length).fill(0);
    for (let i = 0; i < costs.length; i++) {
        costs[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }

    let maxLength = 0;

    let left = 0;

    let usedCost = 0;

    for (let i = 0; i < costs.length; i++) {
        usedCost += costs[i];

        while (usedCost > maxCost) {
            usedCost -= costs[left];
            left++;
        }

        maxLength = Math.max(maxLength, i - left + 1);
    }

    return maxLength;
};