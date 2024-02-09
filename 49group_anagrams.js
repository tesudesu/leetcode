// https://leetcode.com/problems/group-anagrams/

// O(nm) time

var groupAnagrams = function(strs) {
    let maps = {};
    for (let i = 0; i < strs.length; i++) {
        const map = Array(26).fill(0);
        for (let j = 0; j < strs[i].length; j++) {
            let code = strs[i].charCodeAt(j) - 97;
            map[code] = map[code] + 1;
        }
        const string = map.toString();
        if (maps[string]) {
            maps[string].push(strs[i]);
        } else {
            maps[string] = [strs[i]];
        }
    }

    let ans = [];

    for (const label in maps) {
        ans.push(maps[label]);
    }

    return ans;
};


// O(nmlogm) time

var groupAnagrams = function(strs) {
    const map = {};

    for (let i = 0; i < strs.length; i++) {
        let sorted = strs[i].split("");
        sorted.sort();
        sorted = sorted.join("");
        if (map[sorted]) {
            map[sorted].push(strs[i]);
        } else {
            map[sorted] = [strs[i]];
        }
    }

    let ans = [];

    for (const str in map) {
        ans.push(map[str]);
    }
    
    return ans;
};