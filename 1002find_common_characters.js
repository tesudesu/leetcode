// https://leetcode.com/problems/find-common-characters/

var commonChars = function(words) {
    const counts = Array(words.length).fill();

    for (let i = 0; i < words.length; i++) {
        const map = new Map();
        for (const c of words[i]) {
            map.set(c, (map.get(c) + 1) || 1);
        }
        counts[i] = map;
    }

    let ans = [];

    for (const [letter, count] of counts[0]) {
        let minCount = count;
        let inAll = true;
        for (let i = 1; i < counts.length; i++) {
            if (!counts[i].has(letter)) {
                inAll = false;
                break;
            }
            minCount = Math.min(minCount, counts[i].get(letter));
        }
        if (inAll) {
            for (let i = 0; i < minCount; i++) {
                ans.push(letter);
            }
        }
    }

    return ans;
};