// https://leetcode.com/problems/group-the-people-given-the-group-size-they-belong-to/

var groupThePeople = function(groupSizes) {
    let map = {};

    for (let i = 0; i < groupSizes.length; i++) {
        if (map[groupSizes[i]]) {
            map[groupSizes[i]].push(i);
        } else {
            map[groupSizes[i]] = [i];
        }
    }

    let res = [];

    for (const group in map) {
        let i = 0;
        while (i < map[group].length) {
            let arr = [];
            for (let j = 0; j < group; j++) {
                arr.push(map[group][i]);
                i++;
            }
            res.push(arr);
        }
    }

    return res;
};