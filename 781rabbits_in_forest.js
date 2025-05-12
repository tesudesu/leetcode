// https://leetcode.com/problems/rabbits-in-forest/

var numRabbits = function(answers) {
    const count = new Map();

    for (let i = 0; i < answers.length; i++) {
        count.set(answers[i], (count.get(answers[i]) + 1) || 1);
    }

    let tot = 0;

    for (const [num, freq] of count) {
        let groups = Math.ceil(freq / (num + 1));
        tot += groups * (num + 1);
    }

    return tot;
};