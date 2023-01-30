// https://leetcode.com/problems/longest-palindrome/

var longestPalindrome = function (s) {
    let obj = {};
    for (let i = 0; i < s.length; i++) {
        if (obj[s[i]]) {
            obj[s[i]]++;
        } else {
            obj[s[i]] = 1;
        }
    }
    let length = 0;
    let hasOdd = false;
    for (letter in obj) {
        if (obj[letter] % 2 == 0) {
            length += obj[letter];
        } else {
            length += obj[letter] - 1;
            hasOdd = true;
        }
    }
    if (hasOdd) {
        length++;
    }
    return length;
};

// var longestPalindrome = function (s) {
//     let obj = {};
//     for (let i = 0; i < s.length; i++) {
//         if (s[i] == 'a') { obj.a = obj.a + 1 || 1 };
//         if (s[i] == 'b') { obj.b = obj.b + 1 || 1 };
//         if (s[i] == 'c') { obj.c = obj.c + 1 || 1 };
//         if (s[i] == 'd') { obj.d = obj.d + 1 || 1 };
//         if (s[i] == 'e') { obj.e = obj.e + 1 || 1 };
//         if (s[i] == 'f') { obj.f = obj.f + 1 || 1 };
//         if (s[i] == 'g') { obj.g = obj.g + 1 || 1 };
//         if (s[i] == 'h') { obj.h = obj.h + 1 || 1 };
//         if (s[i] == 'i') { obj.i = obj.i + 1 || 1 };
//         if (s[i] == 'j') { obj.j = obj.j + 1 || 1 };
//         if (s[i] == 'k') { obj.k = obj.k + 1 || 1 };
//         if (s[i] == 'l') { obj.l = obj.l + 1 || 1 };
//         if (s[i] == 'm') { obj.m = obj.m + 1 || 1 };
//         if (s[i] == 'n') { obj.n = obj.n + 1 || 1 };
//         if (s[i] == 'o') { obj.o = obj.o + 1 || 1 };
//         if (s[i] == 'p') { obj.p = obj.p + 1 || 1 };
//         if (s[i] == 'q') { obj.q = obj.q + 1 || 1 };
//         if (s[i] == 'r') { obj.r = obj.r + 1 || 1 };
//         if (s[i] == 's') { obj.s = obj.s + 1 || 1 };
//         if (s[i] == 't') { obj.t = obj.t + 1 || 1 };
//         if (s[i] == 'u') { obj.u = obj.u + 1 || 1 };
//         if (s[i] == 'v') { obj.v = obj.v + 1 || 1 };
//         if (s[i] == 'w') { obj.w = obj.w + 1 || 1 };
//         if (s[i] == 'x') { obj.x = obj.x + 1 || 1 };
//         if (s[i] == 'y') { obj.y = obj.y + 1 || 1 };
//         if (s[i] == 'z') { obj.z = obj.z + 1 || 1 };
//         if (s[i] == 'A') { obj.A = obj.A + 1 || 1 };
//         if (s[i] == 'B') { obj.B = obj.B + 1 || 1 };
//         if (s[i] == 'C') { obj.C = obj.C + 1 || 1 };
//         if (s[i] == 'D') { obj.D = obj.D + 1 || 1 };
//         if (s[i] == 'E') { obj.E = obj.E + 1 || 1 };
//         if (s[i] == 'F') { obj.F = obj.F + 1 || 1 };
//         if (s[i] == 'G') { obj.G = obj.G + 1 || 1 };
//         if (s[i] == 'H') { obj.H = obj.H + 1 || 1 };
//         if (s[i] == 'I') { obj.I = obj.I + 1 || 1 };
//         if (s[i] == 'J') { obj.J = obj.J + 1 || 1 };
//         if (s[i] == 'K') { obj.K = obj.K + 1 || 1 };
//         if (s[i] == 'L') { obj.L = obj.L + 1 || 1 };
//         if (s[i] == 'M') { obj.M = obj.M + 1 || 1 };
//         if (s[i] == 'N') { obj.N = obj.N + 1 || 1 };
//         if (s[i] == 'O') { obj.O = obj.O + 1 || 1 };
//         if (s[i] == 'P') { obj.P = obj.P + 1 || 1 };
//         if (s[i] == 'Q') { obj.Q = obj.Q + 1 || 1 };
//         if (s[i] == 'R') { obj.R = obj.R + 1 || 1 };
//         if (s[i] == 'S') { obj.S = obj.S + 1 || 1 };
//         if (s[i] == 'T') { obj.T = obj.T + 1 || 1 };
//         if (s[i] == 'U') { obj.U = obj.U + 1 || 1 };
//         if (s[i] == 'V') { obj.V = obj.V + 1 || 1 };
//         if (s[i] == 'W') { obj.W = obj.W + 1 || 1 };
//         if (s[i] == 'X') { obj.X = obj.X + 1 || 1 };
//         if (s[i] == 'Y') { obj.Y = obj.Y + 1 || 1 };
//         if (s[i] == 'Z') { obj.Z = obj.Z + 1 || 1 };
//     }
//     let length = 0;
//     let hasOdd = false;
//     for (letter in obj) {
//         if (obj[letter] % 2 == 0) {
//             length += obj[letter];
//         } else {
//             length += obj[letter] - 1;
//             hasOdd = true;
//         }
//     }
//     if (hasOdd) {
//         length++;
//     }
//     return length;
// };