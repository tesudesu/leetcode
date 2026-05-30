// https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/

var findKthBit = function(n, k) {
    if (n === 1) {
        return "0";
    }

    const prevLength = Math.pow(2, n - 1) - 1;
    const mid = prevLength + 1;

    if (k === mid) {
        return "1";
    }

    if (k < mid) {
        return findKthBit(n - 1, k);
    } else {
        const mirror = mid - (k - mid);
        const bit = findKthBit(n - 1, mirror);
        return bit === "0" ? "1" : "0";
    }
};


// var findKthBit = function(n, k) {
//     const reverse_invert = (str) => {
//         let ans = [];
//         for (let i = str.length - 1; i >= 0; i--) {
//             if (str[i] === "0") {
//                 ans.push("1");
//             } else {
//                 ans.push("0");
//             }
//         }
//         return ans.join("");
//     }

//     const cache = Array(n + 1).fill("");
//     cache[1] = "0";

//     const helper = (m) => {
//         if (cache[m]) {
//             return cache[m];
//         }
//         const prev = helper(m - 1);
//         const ans = prev + "1" + reverse_invert(prev);
//         cache[m] = ans;
//         return ans;
//     }

//     const str = helper(n);
//     return str[k - 1];
// };