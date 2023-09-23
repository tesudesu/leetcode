// https://leetcode.com/problems/longest-string-chain/

var longestStrChain = function(words) {
    let sorted = words.map(elem => [elem, elem.length]).sort((a, b) => a[1] - b[1]);
    sorted = sorted.map(elem => elem[0]);

    let dp = Array(words.length).fill(1);

    for (let i = 1; i < sorted.length; i++) { 
        for (let j = i - 1; j >= 0; j--) {
            if (sorted[j].length === sorted[i].length) continue;
            if (sorted[i].length - sorted[j].length > 1) break;
            if (isPredecessor(sorted[i], sorted[j])) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }

    return Math.max(...dp);
};

const isPredecessor = (longer, shorter) => {
    let l = 0;
    let s = 0;

    while (s < shorter.length && l < longer.length) {
        if (longer.length - l < shorter.length - s) return false;
        if (shorter[s] === longer[l]) {
            s++;
            l++;
        } else {
            l++;
        }
    }

    if (s === shorter.length) {
        return true;
    } else {
        return false;
    }
}