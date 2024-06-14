// https://leetcode.com/problems/implement-trie-prefix-tree/

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
        for (const c of word) {
            if (!curr.children[c]) {
                return false;
            }
            curr = curr.children[c];
        }
        return curr.end;
    }

    startsWith(prefix) {
        let curr = this.root;
        for (const c of prefix) {
            if (!curr.children[c]) {
                return false;
            }
            curr = curr.children[c];
        }
        return true;
    }
}


const TrieNode = function() {
    this.children = {};
    this.isEnd = false;
}

var Trie = function() {
    this.root = new TrieNode();
};

Trie.prototype.insert = function(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
        if (!curr.children[word[i]]) {
            curr.children[word[i]] = new TrieNode();
        }
        curr = curr.children[word[i]];
    }
    curr.isEnd = true;
};

Trie.prototype.search = function(word) {
    let curr = this.root;
    for (let i = 0; i < word.length; i++) {
        if (!curr.children[word[i]]) return false;
        curr = curr.children[word[i]];
    }
    if (!curr.isEnd) return false;
    return true;
};

Trie.prototype.startsWith = function(prefix) {
    let curr = this.root;
    for (let i = 0; i < prefix.length; i++) {
        if (!curr.children[prefix[i]]) return false;
        curr = curr.children[prefix[i]];
    }
    return true;
};


// var Trie = function() {
//     this.words = [];
// };

// Trie.prototype.insert = function(word) {
//     this.words.push(word);
// };

// Trie.prototype.search = function(word) {
//     for (let i = 0; i < this.words.length; i++) {
//         if (word === this.words[i]) return true;
//     }
//     return false;
// };

// Trie.prototype.startsWith = function(prefix) {
//     for (let i = 0; i < this.words.length; i++) {
//         if (this.words[i].indexOf(prefix) === 0) return true;
//     }
//     return false;
// };