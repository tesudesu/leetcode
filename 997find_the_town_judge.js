// https://leetcode.com/problems/find-the-town-judge/

var findJudge = function(n, trust) {
    const trusting = new Set();
    const trustedBy = new Map();

    for (let i = 1; i <= n; i++) {
        trustedBy.set(i, 0);
    }

    for (let i = 0; i < trust.length; i++) {
        const [a, b] = trust[i];

        trustedBy.set(b, trustedBy.get(b) + 1);
        trusting.add(a);
    }

    for (const [person, freq] of trustedBy) {
        if (freq === n - 1 && !trusting.has(person)) {
            return person;
        }
    }

    return -1;
};


var findJudge = function(n, trust) {
    const trusting = Array(n + 1).fill(false);
    const trustedByCount = Array(n + 1).fill(0);

    for (let i = 0; i < trust.length; i++) {
        const [a, b] = trust[i];

        trusting[a] = true;
        trustedByCount[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (!trusting[i] && trustedByCount[i] === n - 1) {
            return i;
        }
    }

    return -1;
};


// One array

var findJudge = function(n, trust) {
    const trustedByCount = Array(n + 1).fill(0);

    for (const [a, b] of trust) {
        trustedByCount[a]--;
        trustedByCount[b]++;
    }

    for (let i = 1; i <= n; i++) {
        if (trustedByCount[i] === n - 1) {
            return i;
        }
    }

    return -1;
};