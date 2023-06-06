// https://leetcode.com/problems/online-stock-span/

var StockSpanner = function() {
    this.stack = [];
    this.output = {};
};

StockSpanner.prototype.next = function(price) {
    let count = 1;

    while (this.stack.length > 0 && price >= this.stack[this.stack.length - 1]) {
        let popped = this.stack.pop();
        count += this.output[popped];
    }

    this.output[price] = count;
    this.stack.push(price);
    return count;
};