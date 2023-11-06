// https://leetcode.com/problems/restore-ip-addresses/

var restoreIpAddresses = function (s) {
    let res = [];
    
    const dfs = (startIndex, spot, string) => {
        if (spot === 4) {
            if (startIndex < s.length) {
                if (startIndex === s.length - 1) {
                    string += s[startIndex];
                    res.push(string);
                } else if (s.length - startIndex <= 3 && s[startIndex] !== "0") {
                    const portion = s.slice(startIndex, s.length);
                    if (Number(portion) <= 255) {
                        string += portion;
                        res.push(string);
                    }
                }
            }
            return;
        }

        if (s[startIndex] === "0") {
            dfs(startIndex + 1, spot + 1, string + s[startIndex] + ".");
        } else {
            let num = "";
            for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
                num += s[endIndex];
                if (Number(num) <= 255) {
                    dfs(endIndex + 1, spot + 1, string + num + ".");
                } else {
                    break;
                }
            }
        }
    }

    dfs(0, 1, "")

    return res;
};