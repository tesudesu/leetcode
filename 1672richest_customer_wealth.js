// https://leetcode.com/problems/richest-customer-wealth/

var maximumWealth = function(accounts) {
    let max = 0;

    for (let i = 0; i < accounts.length; i++) {
        let curr = 0;
        for (let j = 0; j < accounts[0].length; j++) {
            curr += accounts[i][j];
        }
        max = Math.max(max, curr);
    }

    return max;
};