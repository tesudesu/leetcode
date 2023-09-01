// https://leetcode.com/problems/minimum-penalty-for-a-shop/

var bestClosingTime = function(customers) {
    let yes = Array(customers.length);
    let no = Array(customers.length);

    for (let i = customers.length - 1; i >= 0; i--) {
        if (customers[i] === "Y") {
            yes[i] = 1 + (yes[i + 1] || 0);
        } else {
            yes[i] = yes[i + 1] || 0;
        }
    }

    for (let i = 0; i < customers.length; i++) {
        if (customers[i] === "N") {
            no[i] = 1 + (no[i - 1] || 0);
        } else {
            no[i] = no[i - 1] || 0;
        }
    }

    let penalties = Array(customers.length + 1);

    penalties[0] = yes[0];
    penalties[penalties.length - 1] = no[no.length - 1];

    for (let i = 1; i < penalties.length - 1; i++) {
        penalties[i] = yes[i] + no[i - 1];
    }

    let min = Infinity;
    let ind;

    for (let i = 0; i < penalties.length; i++) {
        if (penalties[i] < min) {
            min = penalties[i];
            ind = i;
        }
    }

    return ind;
};