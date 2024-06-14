// https://leetcode.com/problems/replace-words/

// Trie

var replaceWords = function(dictionary, sentence) {
    let ans = sentence.split(" ");
    let root = new Trie();

    for (let i = 0; i < dictionary.length; i++) {
        root.insert(dictionary[i]);
    }

    for (let i = 0; i < ans.length; i++) {
        let prefix = root.search(ans[i]);
        if (prefix.length > 0) {
            ans[i] = prefix.join("");
        }
    }

    return ans.join(" ");
};

class TrieNode {
    constructor() {
        this.children = {};
        this.end = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let curr = this.root;
        for (const c of word) {
            if (!curr.children[c]) {
                curr.children[c] = new TrieNode();
            }
            curr = curr.children[c];
        }
        curr.end = true;
    }

    search(word) {
        let curr = this.root;
        let arr = [];
        for (const c of word) {
            if (!curr.children[c]) {
                return [];
            }
            curr = curr.children[c];
            arr.push(c);
            if (curr.end) {
                return arr;
            }
        }
        return [];
    }
}


// Brute force

var replaceWords = function(dictionary, sentence) {
    const dict = new Set(dictionary);
    let ans = sentence.split(" ");
    for (let i = 0; i < ans.length; i++) {
        for (let j = 1; j <= ans[i].length; j++) {
            const substring = ans[i].slice(0, j);
            if (dict.has(substring)) {
                ans[i] = substring;
                break;
            }
        }
    }

    return ans.join(" ");
};