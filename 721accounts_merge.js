// https://leetcode.com/problems/accounts-merge/

// Union find

var accountsMerge = function(accounts) {
    const roots = Array(accounts.length).fill();
    const size = Array(accounts.length).fill();
    for (let i = 0; i < accounts.length; i++) {
        roots[i] = i;
        size[i] = 1;
    }

    const find = (node) => {
        if (node === roots[node]) {
            return node;
        }
        // path compression
        roots[node] = find(roots[node]);
        return roots[node];
    }

    const union = (node1, node2) => {
        const root1 = find(node1);
        const root2 = find(node2);
        if (root1 === root2) return;

        // union by size
        if (size[root1] >= size[root2]) {
            size[root1] += size[root2];
            roots[root2] = root1;
        } else {
            size[root2] += size[root1];
            roots[root1] = root2;
        }
    }

    const emailToIndex = new Map();

    for (let i = 0; i < accounts.length; i++) {
        for (let j = 1; j < accounts[i].length; j++) {
            const email = accounts[i][j];
            if (!emailToIndex.has(email)) {
                emailToIndex.set(email, i);
            } else {
                union(i, emailToIndex.get(email));
            }
        }
    }

    const indexToEmails = new Map();

    for (const [email, index] of emailToIndex) {
        const root = find(index);
        if (!indexToEmails.has(root)) {
            indexToEmails.set(root, [email]);
        } else {
            let arr = indexToEmails.get(root);
            arr.push(email);
            indexToEmails.set(root, arr);
        }
    }

    let ans = [];

    for (const [index, emails] of indexToEmails) {
        const name = accounts[index][0];
        emails.sort();
        ans.push([name, ...emails]);
    }

    return ans;
};


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