// https://leetcode.com/problems/sentence-similarity-ii/

var areSentencesSimilarTwo = function(sentence1, sentence2, similarPairs) {
    if (sentence1.length !== sentence2.length) return false;

    const roots = new Map();
    const rank = new Map();

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

        if (root1 === root2) return;

        if (rank.get(root1) < rank.get(root2)) {
            roots.set(root1, root2);
        } else if (rank.get(root1) > rank.get(root2)) {
            roots.set(root2, root1);
        } else {
            roots.set(root2, root1);
            rank.set(root1, rank.get(root1) + 1);
        }
    }

    for (const [a, b] of similarPairs) {
        union(a, b);
    }

    for (let i = 0; i < sentence1.length; i++) {
        if (find(sentence1[i]) !== find(sentence2[i])) {
            return false;
        }
    }

    return true;
};