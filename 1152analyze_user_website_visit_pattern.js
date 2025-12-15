// https://leetcode.com/problems/analyze-user-website-visit-pattern/

var mostVisitedPattern = function(username, timestamp, website) {
    let combined = username.map((e, i) => [timestamp[i], e, website[i]]);
    combined.sort((a, b) => a[0] - b[0]);

    let allSites = new Set();

    const users = new Map();

    for (let i = 0; i < combined.length; i++) {
        const user = combined[i][1];
        const site = combined[i][2];
        allSites.add(site);
        if (users.has(user)) {
            let arr = users.get(user);
            arr.push(site);
        } else {
            users.set(user, [site]);
        }
    }

    allSites = [...allSites];

    let possibilities = [];
    let curr = [];

    const bt = () => {
        if (curr.length === 3) {
            possibilities.push(curr.slice());
            return;
        }

        for (let j = 0; j < allSites.length; j++) {
            curr.push(allSites[j]);
            bt();
            curr.pop();
        }
    }

    bt();

    possibilities.sort();

    const checkHasPattern = (user, pattern) => {
        let j = 0;

        for (let i = 0; i < pattern.length; i++) {
            let found = false;
            while (j < user.length) {
                if (pattern[i] === user[j]) {
                    found = true;
                    j++;
                    break;
                }
                j++;
            }
            if (!found) return false;
        }

        return true;
    }

    let max = 0;
    let ans;

    for (const pattern of possibilities) {
        let tot = 0;
        for (const [person, sites] of users) {
            if (checkHasPattern(sites, pattern)) {
                tot++;
            }
        }
        if (tot > max) {
            max = tot;
            ans = pattern;
        }
    }

    return ans;
};