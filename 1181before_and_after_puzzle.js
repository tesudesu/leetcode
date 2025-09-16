// https://leetcode.com/problems/before-and-after-puzzle/

var beforeAndAfterPuzzles = function(phrases) {
    let ans = new Set();

    for (let i = 0; i < phrases.length; i++) {
        phrases[i] = phrases[i].split(" ");
    }

    for (let i = 0; i < phrases.length; i++) {
        for (let j = 0; j < phrases.length; j++) {
            if (i === j) continue;
            if (phrases[i][phrases[i].length - 1] === phrases[j][0]) {
                let combined = [...phrases[i], ...phrases[j].slice(1)];
                combined = combined.join(" ");
                ans.add(combined);
            }
        }
    }

    ans = [...ans];
    
    ans.sort();

    return ans;
};