// https://leetcode.com/problems/restore-ip-addresses/

var restoreIpAddresses = function(s) {
    if (s.length > 12) return [];
    
    let ans = [];
    let curr = [];

    const bt = (i) => {
        if (curr.length > 4) return;

        if (i >= s.length) {
            if (curr.length === 4) {
                ans.push(curr.join("."));
            }
            return;
        }

        if (s[i] === "0") {
            curr.push(s[i]);
            bt(i + 1);
            curr.pop();
        } else {
            for (let j = i; j < s.length; j++) {
                const substring = s.slice(i, j + 1);
                if (Number(substring) <= 255) {
                    curr.push(substring);
                    bt(j + 1);
                    curr.pop();
                } else {
                    break;
                }
            }
        }
    }

    bt(0);

    return ans;
};

// var restoreIpAddresses = function (s) {
//     let res = [];
    
//     const dfs = (startIndex, spot, string) => {
//         if (spot === 4) {
//             if (startIndex < s.length) {
//                 if (startIndex === s.length - 1) {
//                     string += s[startIndex];
//                     res.push(string);
//                 } else if (s.length - startIndex <= 3 && s[startIndex] !== "0") {
//                     const portion = s.slice(startIndex, s.length);
//                     if (Number(portion) <= 255) {
//                         string += portion;
//                         res.push(string);
//                     }
//                 }
//             }
//             return;
//         }

//         if (s[startIndex] === "0") {
//             dfs(startIndex + 1, spot + 1, string + s[startIndex] + ".");
//         } else {
//             let num = "";
//             for (let endIndex = startIndex; endIndex < s.length; endIndex++) {
//                 num += s[endIndex];
//                 if (Number(num) <= 255) {
//                     dfs(endIndex + 1, spot + 1, string + num + ".");
//                 } else {
//                     break;
//                 }
//             }
//         }
//     }

//     dfs(0, 1, "")

//     return res;
// };