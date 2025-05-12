// https://leetcode.com/problems/booking-concert-tickets-in-groups/

var BookMyShow = function(n, m) {
    this.n = n;
    this.m = m;
    this.sumTree = Array(4 * this.n).fill(0);
    this.minTree = Array(4 * this.n).fill(0);
};

BookMyShow.prototype.add = function(treeIndex, left, right, addAtIndex, group) {
    if (left === right) { // leaf
        this.sumTree[treeIndex] += group;
        this.minTree[treeIndex] += group;
        return;
    }
    let mid = left + Math.floor((right - left) / 2);
    if (addAtIndex <= mid) {
        this.add(treeIndex * 2, left, mid, addAtIndex, group);
    } else {
        this.add(treeIndex * 2 + 1, mid + 1, right, addAtIndex, group);
    }
    this.sumTree[treeIndex] = this.sumTree[treeIndex * 2] + this.sumTree[treeIndex * 2 + 1];
    this.minTree[treeIndex] = Math.min(this.minTree[treeIndex * 2], this.minTree[treeIndex * 2 + 1]);
}

BookMyShow.prototype.getRangeSum = function(treeIndex, currLeft, currRight, queryLeft, queryRight) {
    if (queryLeft <= currLeft && currRight <= queryRight) {
        return this.sumTree[treeIndex];
    }

    if (currRight < queryLeft || currLeft > queryRight) {
        return 0;
    }

    let mid = currLeft + Math.floor((currRight - currLeft) / 2);
    let leftAns = this.getRangeSum(treeIndex * 2, currLeft, mid, queryLeft, queryRight);
    let rightAns = this.getRangeSum(treeIndex * 2 + 1, mid + 1, currRight, queryLeft, queryRight);

    return leftAns + rightAns;
}

BookMyShow.prototype.getMinIndex = function(treeIndex, left, right, maxIndex, group) {
    if (this.m - this.minTree[treeIndex] < group) {
        return -1;
    }

    if (left === right) {
        return left;
    }

    let mid = left + Math.floor((right - left) / 2);

    if (this.m - this.minTree[treeIndex * 2] >= group) {
        return this.getMinIndex(treeIndex * 2, left, mid, maxIndex, group);
    }

    if (maxIndex > mid) {
        return this.getMinIndex(treeIndex * 2 + 1, mid + 1, right, maxIndex, group);
    }

    return -1;
}

BookMyShow.prototype.gather = function(k, maxRow) {
    let minIndex = this.getMinIndex(1, 0, this.n - 1, maxRow, k);
    if (minIndex === -1) {
        return [];
    }
    let seat = this.getRangeSum(1, 0, this.n - 1, minIndex, minIndex);
    this.add(1, 0, this.n - 1, minIndex, k);
    return [minIndex, seat];
};

BookMyShow.prototype.scatter = function(k, maxRow) {
    let takenSeats = this.getRangeSum(1, 0, this.n - 1, 0, maxRow);
    let totSeats = (maxRow + 1) * this.m;
    if (totSeats - takenSeats < k) {
        return false;
    }

    let people = k;
    let i = this.getMinIndex(1, 0, this.n - 1, maxRow, 1); // find the first row that is not full

    while (people > 0) {
        let emptySeatsInRow = this.m - this.getRangeSum(1, 0, this.n - 1, i, i);
        let toAdd = Math.min(emptySeatsInRow, people);
        this.add(1, 0, this.n - 1, i, toAdd);
        people -= toAdd;
        i++;
    }

    return true;
};