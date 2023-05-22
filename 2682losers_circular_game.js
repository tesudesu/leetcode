// https://leetcode.com/problems/find-the-losers-of-the-circular-game/

var circularGameLosers = function(n, k) {
    let played = new Set();
    let person = 1;
    let multiplier = 1;
    while (!played.has(person)) {
        played.add(person);
        person = (person + (multiplier * k)) % n;
        if (person === 0) {
            person = n;
        }
        multiplier++;
    }
    let ans = [];
    for (let i = 2; i <= n; i++) {
        if (!played.has(i)) {
            ans.push(i);
        }
    }
    return ans;
};