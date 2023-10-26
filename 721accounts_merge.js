// https://leetcode.com/problems/accounts-merge/

var accountsMerge = function(accounts) {
    let emailToIndex = {};
    let visitedAccounts = Array(accounts.length).fill(false);

    for (let i = 0; i < accounts.length; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            if (!emailToIndex[accounts[i][j]]) {
                emailToIndex[accounts[i][j]] = [i];
            } else {
                emailToIndex[accounts[i][j]].push(i);
            }
        }
    }

    const dfs = (i, emails) => {
        if (visitedAccounts[i]) return;
        visitedAccounts[i] = true;

        for (let j = 1; j < accounts[i].length; j++) {
            const email = accounts[i][j];
            emails.add(email);
            const otherAccounts = emailToIndex[email];
            if (otherAccounts.length === 1) continue;
            for (let k = 0; k < otherAccounts.length; k++) {
                dfs(otherAccounts[k], emails);
            }
        }
    }

    let res = [];

    for (let i = 0; i < accounts.length; i++) {
        if (visitedAccounts[i]) continue;

        const name = accounts[i][0];
        let emails = new Set();

        dfs(i, emails);

        emails = [...emails];
        emails.sort();
        const merged = [name, ...emails];
        res.push(merged);
    }

    return res;
};