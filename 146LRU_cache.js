// https://leetcode.com/problems/lru-cache/

var LRUCache = function(capacity) {
    this.cap = capacity;
    this.map = new Map();
    this.queue = new Queue();
    this.freq = new Map();
};

LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        if (this.queue.back() !== key) {
            this.queue.enqueue(key);
            this.freq.set(key, (this.freq.get(key) || 0) + 1);
        }
        return this.map.get(key);
    } else {
        return -1;
    }
};

LRUCache.prototype.put = function(key, value) {
    this.map.set(key, value);
    if (this.queue.back() !== key) {
        this.queue.enqueue(key);
        this.freq.set(key, (this.freq.get(key) || 0) + 1);
    }

    while (this.map.size > this.cap) {
        const removed = this.queue.dequeue();
        if (this.freq.get(removed) === 1) {
            this.freq.delete(removed);
            this.map.delete(removed);
        } else {
            this.freq.set(removed, this.freq.get(removed) - 1);
        }
    }
};


// Definition for a Node in a doubly-linked list.
// function Node(key, val, prev, next) {
//     this.key = (key === undefined ? 0 : key);
//     this.val = (val === undefined ? 0 : val);
//     this.prev = (prev === undefined ? null : next);
//     this.next = (next === undefined ? null : next);
// };

// var LRUCache = function (capacity) {
//     this.cap = capacity;
//     this.map = new Map();
//     this.left = new Node();
//     this.right = new Node();
//     this.left.next = this.right;
//     this.right.prev = this.left;
// };

// LRUCache.prototype.remove = function (node) {
//     const prev = node.prev;
//     const nxt = node.next;
//     prev.next = nxt;
//     nxt.prev = prev;
// };

// LRUCache.prototype.insert = function (node) {
//     const oldPrev = this.right.prev;
//     this.right.prev.next = node;
//     this.right.prev = node;
//     node.next = this.right;
//     node.prev = oldPrev;
// };

// LRUCache.prototype.get = function (key) {
//     if (this.map.has(key)) {
//         const node = this.map.get(key);
//         this.remove(node);
//         this.insert(node);
//         return node.val;
//     } else {
//         return -1;
//     }
// };

// LRUCache.prototype.put = function (key, value) {
//     if (this.map.has(key)) {
//         this.remove(this.map.get(key));
//     }
//     const newNode = new Node(key, value);
//     this.map.set(key, newNode);
//     this.insert(newNode);

//     if (this.map.size > this.cap) {
//         const lru = this.left.next;
//         this.remove(lru);
//         this.map.delete(lru.key);
//     }
// };