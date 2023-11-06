// https://leetcode.com/problems/product-of-the-last-k-numbers/

var ProductOfNumbers = function() {
    this.prefixProduct = [];
};


ProductOfNumbers.prototype.add = function(num) {
    if (num !== 0) {
        this.prefixProduct.push(num * (this.prefixProduct[this.prefixProduct.length - 1] || 1));
    } else {
        this.prefixProduct = [];
    }
};


ProductOfNumbers.prototype.getProduct = function(k) {
    if (k > this.prefixProduct.length) {
        return 0;
    } else if (k === this.prefixProduct.length) {
        return this.prefixProduct[this.prefixProduct.length - 1];
    } else {
        return this.prefixProduct[this.prefixProduct.length - 1] / this.prefixProduct[this.prefixProduct.length - k - 1];
    }
};