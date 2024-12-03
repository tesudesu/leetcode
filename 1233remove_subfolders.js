// https://leetcode.com/problems/remove-sub-folders-from-the-filesystem/

var removeSubfolders = function(folder) {
    folder.sort();
    let removed = Array(folder.length).fill(false);
    let ans = [];

    for (let i = 0; i < folder.length; i++) {
        if (removed[i]) continue;
        let curr = folder[i];
        ans.push(curr);
        for (let j = i + 1; j < folder.length; j++) {
            let match = true;
            for (let k = 0; k < curr.length; k++) {
                if (curr[k] !== folder[j][k]) {
                    match = false;
                    break;
                }
            }
            if (folder[j].length > curr.length) {
                if (folder[j][curr.length] !== "/") {
                    match = false;
                }
            }
            if (match) {
                removed[j] = true;
            }
        }
    }

    return ans;
};