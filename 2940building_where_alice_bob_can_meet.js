// https://leetcode.com/problems/find-building-where-alice-and-bob-can-meet/

var leftmostBuildingQueries = function(heights, queries) {
    let ans = Array(queries.length).fill(-1);

    let remain = [];

    for (let i = 0; i < queries.length; i++) {
        const [a, b] = queries[i];
        if (a === b) {
            ans[i] = a;
            continue;
        } 
        let maxOfAB = Math.max(a, b);
        let minOfAB = Math.min(a, b);
        if (heights[minOfAB] < heights[maxOfAB]) {
            ans[i] = maxOfAB;
            continue;
        }
        remain.push([maxOfAB, heights[minOfAB], i]);
    }

    remain.sort((a, b) => b[0] - a[0]);

    let stack = [];
    let rightBoundary = heights.length - 1;

    for (let i = 0; i < remain.length; i++) {
        const [higherBuildingIndex, higherBuilding, originalIndex] = remain[i];
        for (let j = rightBoundary; j > higherBuildingIndex; j--) {
            while (stack.length > 0 && heights[j] >= heights[stack[stack.length - 1]]) {
                stack.pop();
            }
            stack.push(j);
        }
        
        let start = 0;
        let end = stack.length - 1;
        let res = -1;

        while (start <= end) {
            const mid = Math.floor((end - start) / 2) + start;
            if (heights[stack[mid]] > higherBuilding) {
                res = stack[mid];
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        ans[originalIndex] = res;

        rightBoundary = higherBuildingIndex;
    }

    return ans;
};


// Segment tree

var leftmostBuildingQueries = function (heights, queries) {
    let ans = Array(queries.length).fill(-1);
    let tree = new SegmentTree(heights);
    tree.build(1, 0, heights.length - 1);

    for (let i = 0; i < queries.length; i++) {
        let rightIndex = Math.max(queries[i][1], queries[i][0]);
        let leftIndex = Math.min(queries[i][1], queries[i][0]);

        if (rightIndex === leftIndex || heights[rightIndex] > heights[leftIndex]) {
            ans[i] = rightIndex;
            continue;
        }

        let max = heights[leftIndex] + 1;
        let minInd = rightIndex + 1;
        if (minInd === heights.length) continue;

        let res = tree.search(1, 0, heights.length - 1, max, minInd);

        if (res !== -1) {
            ans[i] = res;
        }
    }

    return ans;
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

    //search index
    search(treeIndex, left, right, value, index) {
        if (this.tree[treeIndex] < value) {
            return -1;
        }

        if (left === right) {
            if (left >= index) {
                return left;
            } else {
                return -1;
            }
        }

        let mid = left + Math.floor((right - left) / 2);

        let leftInd = -1;

        if (this.tree[2 * treeIndex] >= value && mid >= index) {
            leftInd = this.search(2 * treeIndex, left, mid, value, index);
        }

        if (leftInd !== -1) {
            return leftInd;
        } else {
            return this.search(2 * treeIndex + 1, mid + 1, right, value, index);
        }
    }
}