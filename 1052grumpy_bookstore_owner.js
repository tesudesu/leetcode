// https://leetcode.com/problems/grumpy-bookstore-owner/

var maxSatisfied = function(customers, grumpy, minutes) {
    let addedCustomers = 0;

    for (let i = 0; i < minutes; i++) {
        if (grumpy[i] === 1) {
            addedCustomers += customers[i];
        }
    }

    let maxAddedCustomers = addedCustomers;

    for (let i = minutes; i < customers.length; i++) {
        if (grumpy[i - minutes] === 1) {
            addedCustomers -= customers[i - minutes];
        }
        if (grumpy[i] === 1) {
            addedCustomers += customers[i];
        }
        maxAddedCustomers = Math.max(maxAddedCustomers, addedCustomers);
    }

    let tot = 0;

    for (let i = 0; i < customers.length; i++) {
        if (grumpy[i] === 0) {
            tot += customers[i];
        }
    }

    return tot + maxAddedCustomers;
};