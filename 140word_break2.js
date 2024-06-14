// https://leetcode.com/problems/word-break-ii/

// Backtrack

var wordBreak = function(s, wordDict) {
    let ans = [];
    let currWord = [];
    const set = new Set(wordDict);

    const dfs = (i) => {
        if (i === s.length) {
            if (currWord.length > 0) {
                const words = currWord.join(" ");
                ans.push(words);
            }
            return;
        }

        for (let j = i; j < s.length; j++) {
            const string = s.slice(i, j + 1);
            if (set.has(string)) {
                currWord.push(string);
                dfs(j + 1);
                currWord.pop();
            }
        }
    }

    dfs(0);

    return ans;
};


// DP

var wordBreak = function(s, wordDict) {
    const set = new Set(wordDict);

    const cache = Array(s.length).fill(-1);

    const dfs = (i) => {
        if (i === s.length) {
            return [""];
        }

        if (cache[i] !== -1) {
            return cache[i];
        }

        let res = [];

        for (let j = i; j < s.length; j++) {
            const string = s.slice(i, j + 1);
            if (set.has(string)) {
                const later = dfs(j + 1);
                for (let k = 0; k < later.length; k++) {
                    if (later[k] !== "") {
                        res.push(string + " " + later[k]);
                    } else {
                        res.push(string);
                    }
                }
            }
        }

        cache[i] = res;

        return res;
    }

    return dfs(0);
};