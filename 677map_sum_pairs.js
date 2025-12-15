// https://leetcode.com/problems/map-sum-pairs/

class TrieNode {
    constructor() {
        this.children = new Map();
        this.tot = 0;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word, val) {
        let curr = this.root;
        for (const c of word) {
            if (!curr.children.has(c)) {
                curr.children.set(c, new TrieNode());
            }
            curr = curr.children.get(c);
            curr.tot += val;
        }
    }

    insertOverride(word, newVal, oldVal) {
        let curr = this.root;
        for (const c of word) {
            curr = curr.children.get(c);
            curr.tot += newVal;
            curr.tot -= oldVal;
        }
    }

    getSum(prefix) {
        let curr = this.root;
        for (let i = 0; i < prefix.length; i++) {
            if (curr.children.has(prefix[i])) {
                curr = curr.children.get(prefix[i]);
            } else {
                return 0;
            }
            if (i === prefix.length - 1) {
                return curr.tot;
            }
        }
    }
}


var MapSum = function() {
    this.trie = new Trie();
    this.map = new Map();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    if (this.map.has(key)) {
        let oldVal = this.map.get(key);
        this.trie.insertOverride(key, val, oldVal);
    } else {
        this.trie.insert(key, val);
    }
    this.map.set(key, val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
    return this.trie.getSum(prefix);
};