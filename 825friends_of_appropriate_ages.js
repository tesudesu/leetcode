// https://leetcode.com/problems/friends-of-appropriate-ages/

var numFriendRequests = function(ages) {
    let counts = new Map();
    for (let i = 0; i < ages.length; i++) {
        counts.set(ages[i], (counts.get(ages[i]) + 1) || 1);
    }

    counts = [...counts];
    counts.sort((a, b) => a[0] - b[0]);

    let requests = 0;

    for (let i = 0; i < counts.length; i++) {
        const [age, count] = counts[i];
        for (let j = i; j >= 0; j--) {
            const [age2, count2] = counts[j];
            if (age * 0.5 + 7 < age2) {
                requests += count * count2;
                if (i === j) {
                    requests -= count;
                }
            } else {
                break;
            }
        }
    }

    return requests;
};