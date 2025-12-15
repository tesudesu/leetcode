// https://leetcode.com/problems/longest-word-in-dictionary/

var longestWord = function(words) {
    words.sort();

    const set = new Set();
    set.add("");
    let ans = "";

    for (let i = 0; i < words.length; i++) {
        let prefix = words[i].slice(0, words[i].length - 1);
        if (set.has(prefix)) {
            set.add(words[i]);
            if (words[i].length > ans.length) {
                ans = words[i];
            }
        }
    }

    return ans;
};


// Trie BFS

class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = "";
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
        }
        curr.end = true;
        curr.word = word;
    }

    bfs() {
        let ans = "";
        const queue = new Queue();
        queue.enqueue(this.root);

        while (!queue.isEmpty()) {
            const curr = queue.dequeue();
            const children = curr.children;
            for (const [character, node] of children) {
                if (node.word) {
                    if (node.word.length > ans.length || node.word < ans) {
                        ans = node.word;
                    }
                    queue.enqueue(node);
                }
            }
        }

        return ans;
    }
}


var longestWord = function(words) {
    const trie = new Trie();

    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i]);
    }
    
    return trie.bfs();
};


// Trie DFS

class TrieNode {
    constructor() {
        this.children = new Map();
        this.word = "";
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
        }
        curr.end = true;
        curr.word = word;
    }

    dfs() {
        let ans = "";

        const traverse = (curr) => {
            const children = curr.children;
            for (const [character, node] of children) {
                if (node.word) {
                    if (node.word.length > ans.length || (node.word.length === ans.length && node.word < ans)) {
                        ans = node.word;
                    }
                    traverse(node);
                }
            }
        }

        traverse(this.root);

        return ans;
    }
}


var longestWord = function(words) {
    const trie = new Trie();

    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i]);
    }
    
    return trie.dfs();
};