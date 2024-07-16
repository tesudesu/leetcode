// https://leetcode.com/problems/crawler-log-folder/

var minOperations = function(logs) {
    let level = 0;

    for (let i = 0; i < logs.length; i++) {
        if (logs[i] === "../") {
            if (level !== 0) {
                level--;
            }
        } else if (logs[i] === "./") {
            continue;
        } else {
            level++;
        }
    }

    return level;
};