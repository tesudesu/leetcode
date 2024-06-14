// https://leetcode.com/problems/relative-sort-array/

var relativeSortArray = function(arr1, arr2) {
    const order = new Map();

    for (let i = 0; i < arr2.length; i++) {
        order.set(arr2[i], i);
    }

    arr1.sort((a, b) => {
        if (order.has(a) && order.has(b)) {
            if (order.get(a) < order.get(b)) {
                return -1;
            } else {
                return 1;
            }
        } else if (order.has(a)) {
            return -1;
        } else if (order.has(b)) {
            return 1;
        } else {
            return a < b ? -1 : 1;
        }
    })

    return arr1;
};