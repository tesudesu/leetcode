// https://leetcode.com/problems/string-compression/

var compress = function(chars) {
    let startInd = 0;
    let i = startInd + 1;
    while (startInd < chars.length) {
        if (chars[i] !== chars[i - 1]) {
            let diff = i - startInd;
            if (diff > 1) {
                let toAdd = diff.toString().split('');
                chars.splice(startInd + 1, diff - 1, ...toAdd);
                startInd = startInd + toAdd.length + 1;
                i = startInd + 1;
                continue;
            } else {
                startInd = i;
                i = startInd + 1;
                continue;
            }
        }
        i++;
    }
    return chars.length;
};