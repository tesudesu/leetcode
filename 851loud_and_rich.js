// https://leetcode.com/problems/loud-and-rich

var loudAndRich = function(richer, quiet) {
    const richerMap = Array(quiet.length).fill().map(() => Array().fill());

    for (const [a, b] of richer) {
        richerMap[b].push(a);
    }

    let ans = Array(quiet.length).fill(-1);

    let leastQuietPerson;
    let minQuietValue;

    const dfs = (person) => {
        if (ans[person] !== -1) return;
        ans[person] = person;
        const richerPeople = richerMap[person];
        for (const richerPerson of richerPeople) {
            dfs(richerPerson);
            if (quiet[ans[person]] > quiet[ans[richerPerson]]) {
                ans[person] = ans[richerPerson];
            }
        }
    }

    for (let i = 0; i < quiet.length; i++) {
        dfs(i);
    }

    return ans;
};