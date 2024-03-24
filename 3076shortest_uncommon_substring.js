// https://leetcode.com/problems/shortest-uncommon-substring-in-an-array/

var shortestSubstrings = function(arr) {
    let substrings = Array(arr.length).fill();

    for (let k = 0; k < arr.length; k++) {
        const word = arr[k];
        const set = new Set();
        for (let i = 0; i < word.length; i++) {
            for (let j = i + 1; j <= word.length; j++) {
                const str = word.slice(i, j);
                set.add(str);
            }
        } 
        substrings[k] = set;
    }

    let ans = Array(arr.length).fill("");

    for (let i = 0; i < arr.length; i++) {
        let strings = [...substrings[i]];
        strings.sort();
        for (let j = 0; j < strings.length; j++) {
            let found = true;
            for (let k = 0; k < substrings.length; k++) {
                if (i === k) continue;
                if (substrings[k].has(strings[j])) {
                    found = false;
                    break;
                }
            }
            if (found) {
                if (ans[i] === "" || ans[i].length > strings[j].length) {
                    ans[i] = strings[j];
                } 
            }
        }
    }

    return ans;
};