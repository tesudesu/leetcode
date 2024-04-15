// https://leetcode.com/problems/time-needed-to-buy-tickets/

var timeRequiredToBuy = function(tickets, k) {
    let tot = tickets[k];

    for (let i = 0; i < k; i++) {
        tot += Math.min(tickets[i], tickets[k]);
    }

    for (let i = k + 1; i < tickets.length; i++) {
        tot += Math.min(tickets[i], tickets[k] - 1);
    }

    return tot;
};