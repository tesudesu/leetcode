// https://leetcode.com/problems/sort-by/

var sortBy = function(arr, fn) {
    let order = arr.map(item => [item, fn(item)]);

    order.sort((a, b) => a[1] - b[1]);

    order = order.map(item => item[0]);

    return order;
};