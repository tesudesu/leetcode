// https://leetcode.com/problems/substring-with-concatenation-of-all-words/

var findSubstring = function(s, words) {
    let ans = [];
    let wordLen = words[0].length;
    let totLen = words.length * wordLen;

    let totCount = new Map();

    for (let i = 0; i < words.length; i++) {
        totCount.set(words[i], (totCount.get(words[i]) + 1) || 1);
    }

    for (let i = 0; i <= s.length - totLen; i++) {
        let j = i;
        let currCount = new Map(totCount);
        while (j <= i + totLen - wordLen) {
            const substring = s.slice(j, j + wordLen);
            if (currCount.has(substring)) {
                currCount.set(substring, currCount.get(substring) - 1);
                if (currCount.get(substring) === 0) {
                    currCount.delete(substring);
                }
            } else {
                break;
            }
            j += wordLen;
        }
        if (currCount.size === 0) {
            ans.push(i);
        }
    }

    return ans;
};


var findSubstring = function(s, words) {
    let wordLen = words[0].length;
    let totLen = words.length * wordLen;
    let ans = [];

    let totCount = new Map();

    for (let i = 0; i < words.length; i++) {
        totCount.set(words[i], (totCount.get(words[i]) + 1) || 1);
    }

    for (let i = 0; i < wordLen; i++) {
        const seen = new Map();
        let left = i;

        for (let j = i; j <= s.length - wordLen; j += wordLen) {
            const sub = s.slice(j, j + wordLen);
            if (!totCount.has(sub)) {
                seen.clear();
                left = j + wordLen;
                continue;
            }
            seen.set(sub, (seen.get(sub) + 1) || 1);
            while (seen.has(sub) && seen.get(sub) > totCount.get(sub)) {
                const prevSub = s.slice(left, left + wordLen);
                seen.set(prevSub, seen.get(prevSub) - 1);
                left += wordLen;
            }
            if (j + wordLen - left === totLen) {
                ans.push(left);
            }
        }
    }

    return ans;
}