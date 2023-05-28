// https://leetcode.com/problems/longest-palindromic-substring/

var longestPalindrome = function (s) {
    let longest = "";

    for (let i = 0; i < s.length; i++) {
        let substring = "";
        let add = 1;
        while (s[i+add] && s[i-add] && s[i+add] === s[i-add]) {
            if (!s[i+add+1] || !s[i-add-1] || s[i+add+1] !== s[i-add-1]) {
                substring = s.slice(i-add, i+add+1);
                if (substring.length > longest.length) longest = substring;
                break;
            }
            add++;
        }

        substring = "";
        add = 0;
        while (s[i-add] && s[i+1+add] && s[i-add] === s[i+1+add]) {
            if (!s[i-add-1] || !s[i+2+add] || s[i-add-1] !== s[i+2+add]) {
                substring = s.slice(i-add, i+1+add);
                if (substring.length > longest.length) longest = substring;
                break;
            }
            add++;
        }
    }

    return longest;
};

// var longestPalindrome = function (s) {
//     const isPalindrome = (string) => {
//         for (let i = 0; i < Math.floor(string.length / 2); i++) {
//             if (string[i] !== string[string.length - 1 - i]) {
//                 return false;
//             }
//         }
//         return true;
//     }

//     if (isPalindrome(s)) return s;

//     let res = "";
//     let end = s.length;
//     for (let i = 0; i < s.length-1; i++) {
//         end = s.length;
//         while (end - 1 > i) {
//             let substring = s.slice(i, end);
//             if (isPalindrome(substring)) {
//                 if (substring.length > res.length) {
//                     res = substring;
//                 }
//             }
//             end--;
//         }
//     }

//     return res === "" ? s[0] : res;
// };