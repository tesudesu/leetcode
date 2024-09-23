// https://leetcode.com/problems/synonymous-sentences/

var generateSentences = function(synonyms, text) {
    text = text.split(" ");
    let ans = [];
    ans.push(text);

    const roots = new Map();
    const rank = new Map();
    const words = new Map();

    const find = (word) => {
        if (!roots.has(word)) {
            roots.set(word, word);
            rank.set(word, 0);
            return word;
        }
        if (roots.get(word) !== word) {
            roots.set(word, find(roots.get(word)));
        }
        return roots.get(word);
    }

    const union = (word1, word2) => {
        const root1 = find(word1);
        const root2 = find(word2);

        if (root1 === root2) {
            return;
        }

        if (rank.get(root1) < rank.get(root2)) {
            roots.set(root1, root2);
        } else if (rank.get(root1) > rank.get(root2)) {
            roots.set(root2, root1);
        } else {
            roots.set(root2, root1);
            rank.set(root1, rank.get(root1) + 1);
        }
    }

    for (const [a, b] of synonyms) {
        union(a, b);
    }

    for (const [a, b] of synonyms) {
        const root = find(a);
        if (!words.has(root)) {
            words.set(root, new Set([a, b]));
        } else {
            let set = words.get(root);
            set.add(a);
            set.add(b);
            words.set(root, set);
        }
    }

    for (let i = 0; i < text.length; i++) {
        let root = find(text[i]);
        if (!words.has(root)) continue;
        let length = ans.length;
        for (const word of words.get(root)) {
            for (let j = 0; j < length; j++) {
                ans.push([...ans[j]]);
                ans[ans.length - 1][i] = word;
            }
        }
    }

    for (let i = 0; i < ans.length; i++) {
        ans[i] = ans[i].join(" ");
    }

    ans = new Set(ans);
    ans = [...ans];

    ans.sort();

    return ans;
};