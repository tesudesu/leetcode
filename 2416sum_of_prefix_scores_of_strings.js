// https://leetcode.com/problems/sum-of-prefix-scores-of-strings/

class TrieNode {
    constructor() {
        this.children = new Map();
        this.count = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }
            curr = curr.children.get(c);
            curr.count++;
        }
    }

    getCounts(word) {
        let counts = 0;
        let curr = this.root;
        for (const c of word) {
            counts += curr.children.get(c).count;
            curr = curr.children.get(c);
        }
        return counts;
    }
}

var sumPrefixScores = function(words) {
    const ans = Array(words.length).fill(0);
    const trie = new Trie();

    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i]);
    }

    for (let i = 0; i < words.length; i++) {
        ans[i] = trie.getCounts(words[i]);
    }

    return ans;
};