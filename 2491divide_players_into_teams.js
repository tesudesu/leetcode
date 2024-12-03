// https://leetcode.com/problems/divide-players-into-teams-of-equal-skill/

var dividePlayers = function(skill) {
    skill.sort((a, b) => a - b);
    const n = skill.length;

    let sum = skill[0] + skill[n - 1];
    let chem = skill[0] * skill[n - 1];

    for (let i = 1; i < n / 2; i++) {
        if (skill[i] + skill[n - i - 1] !== sum) {
            return -1;
        }
        chem += skill[i] * skill[n - i - 1];
    }

    return chem;
};