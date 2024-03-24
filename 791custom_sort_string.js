// https://leetcode.com/problems/custom-sort-string/

var customSortString = function(order, s) {
    const sFreq = {};

    for (let i = 0; i < s.length; i++) {
        sFreq[s[i]] = (sFreq[s[i]] + 1) || 1;
    }

    let ans = [];

    for (let i = 0; i < order.length; i++) {
        if (sFreq[order[i]]) {
            for (let j = 0; j < sFreq[order[i]]; j++) {
                ans.push(order[i]);
            }
            sFreq[order[i]] = 0;
        }
    }

    for (const letter in sFreq) {
        if (sFreq[letter] !== 0) {
            for (let i = 0; i < sFreq[letter]; i++) {
                ans.push(letter);
            }
        }
    }

    return ans.join("");
};


var customSortString = function(order, s) {
    const ordering = {};

    for (let i = 0; i < order.length; i++) {
        ordering[order[i]] = i;
    }

    let inOrder = [];
    let other = [];

    for (let i = 0; i < s.length; i++) {
        if (ordering.hasOwnProperty(s[i])) {
            inOrder.push(s[i]);
        } else {
            other.push(s[i]);
        }
    }

    inOrder.sort((a, b) => {
        return ordering[a] - ordering[b];
    })

    return inOrder.join("") + other.join("");
};