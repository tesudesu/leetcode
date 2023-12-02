// https://leetcode.com/problems/smallest-string-with-swaps/

var smallestStringWithSwaps = function(s, pairs) {
    const connect = new Map();
    for (let i = 0; i < pairs.length; i++) {
        const [a, b] = pairs[i];
        if (connect.has(a)) {
            let arr = connect.get(a);
            arr.push(b);
            connect.set(a, arr);
        } else {
            connect.set(a, [b]);
        }
        if (connect.has(b)) {
            let arr = connect.get(b);
            arr.push(a);
            connect.set(b, arr);
        } else {
            connect.set(b, [a]);
        }
    }

    const visited = new Set();

    const findGroup = (node, arr) => {
        arr.push(node);
        visited.add(node);

        if (connect.has(node)) {
            let connected = connect.get(node);
            for (let i = 0; i < connected.length; i++) {
                if (visited.has(connected[i])) continue;
                visited.add(connected[i])
                findGroup(connected[i], arr);
            }
        }

        return arr;
    }

    let ans = Array(s.length).fill();

    for (let i = 0; i < s.length; i++) {
        if (visited.has(i)) continue;
        let group = findGroup(i, []);
        let letters = Array(group.length).fill();
        for (let i = 0; i < group.length; i++) {
            letters[i] = s[group[i]];
        }
        group.sort((a, b) => a - b);
        letters.sort((a, b) => {
            if (a < b) {
                return -1;
            } else {
                return 1;
            }
        });
        for (let i = 0; i < group.length; i++) {
            ans[group[i]] = letters[i];
        }
    }

    return ans.join("");
};