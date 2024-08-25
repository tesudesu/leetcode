// https://leetcode.com/problems/strange-printer/

var strangePrinter = function(s) {
    const removeDuplicates = (str) => {
        let newString = [];
    
        let i = 0;
    
        while (i < str.length) {
            newString.push(str[i]);
            i++;
            while (str[i] === str[i - 1]) {
                i++;
            }
        }
    
        return newString.join("");
    }

    s = removeDuplicates(s);
    let n = s.length;
    let cache = Array(n).fill().map(() => Array(n).fill(-1))

    const minTurns = (start, end) => {
        if (start > end) {
            return 0;
        }

        if (cache[start][end] !== -1) {
            return cache[start][end];
        }

        let turns = 1 + minTurns(start + 1, end);

        for (let i = start + 1; i <= end; i++) {
            if (s[i] === s[start]) {
                turns = Math.min(turns, minTurns(start, i - 1) + minTurns(i + 1, end));
            }
        }

        cache[start][end] = turns;

        return turns
    }

    return minTurns(0, n - 1);
};