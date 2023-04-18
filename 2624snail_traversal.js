// https://leetcode.com/problems/snail-traversal/

Array.prototype.snail = function(rowsCount, colsCount) {
    if (rowsCount * colsCount !== this.length) {
        return [];
    }
    let ans = Array(rowsCount);
    for (let i = 0; i < ans.length; i++) {
        ans[i] = [];
    }
    let j = -1;
    let asc = true;
    for (let i = 0; i < this.length; i++) {
        if (asc) {
            j++;
        } else {
            j--;
        }
        if (j === rowsCount) {
            asc = false;
            j--;
        } else if (j === -1) {
            asc = true;
            j++;
        }
        ans[j].push(this[i]);
    }
    return ans;
}