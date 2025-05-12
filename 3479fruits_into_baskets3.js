// https://leetcode.com/problems/fruits-into-baskets-iii/

var numOfUnplacedFruits = function(fruits, baskets) {
    let tree = new SegmentTree(baskets);
    tree.build(1, 0, baskets.length - 1);

    let tot = 0;

    for (let i = 0; i < fruits.length; i++) {
        if (!tree.search(1, 0, baskets.length - 1, fruits[i])) {
            tot++;
        }
    }

    return tot;
};


class SegmentTree {
    constructor(arr) {
        this.n = arr.length;
        this.tree = Array(4 * this.n).fill(0);
        this.arr = arr;
    }

    build(treeIndex, left, right) {
        if (left === right) {
            this.tree[treeIndex] = this.arr[left]
            return;
        }
        let mid = left + Math.floor((right - left) / 2);
        this.build(2 * treeIndex, left, mid);
        this.build(2 * treeIndex + 1, mid + 1, right);
        this.tree[treeIndex] = Math.max(this.tree[2 * treeIndex], this.tree[2 * treeIndex + 1]);
    }

    //search whether tree contains value
    search(treeIndex, left, right, value) {
        if (this.tree[treeIndex] < value) {
            return false;
        }

        if (left === right) {
            this.tree[treeIndex] = 0;
            return true;
        }

        let mid = left + Math.floor((right - left) / 2);
        let nextSearch = false;

        if (this.tree[2 * treeIndex] >= value) {
            nextSearch = this.search(2 * treeIndex, left, mid, value);
        } else {
            nextSearch = this.search(2 * treeIndex + 1, mid + 1, right, value);
        }

        this.tree[treeIndex] = Math.max(this.tree[treeIndex * 2], this.tree[treeIndex * 2 + 1]);
        return nextSearch;
    }
}