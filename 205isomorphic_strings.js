// https://leetcode.com/problems/isomorphic-strings/

var isIsomorphic = function(s, t) {
    let sPositions = new Map();
    let tPositions = new Map();

    for (let i = 0; i < s.length; i++) {
        if (!sPositions.has(s[i])) {
            let arr = [];
            arr.push(i);
            sPositions.set(s[i], arr);
        } else {
            let arr = sPositions.get(s[i]);
            arr.push(i);
            sPositions.set(s[i], arr);
        }

        if (!tPositions.has(t[i])) {
            let arr = [];
            arr.push(i);
            tPositions.set(t[i], arr);
        } else {
            let arr = tPositions.get(t[i]);
            arr.push(i);
            tPositions.set(t[i], arr);
        }
    }

    if (sPositions.size !== tPositions.size) return false;

    let sString = '';
    let tString = '';

    for (const entry of sPositions) {
        sString += entry[1] + ',';
    }

    for (const entry of tPositions) {
        tString += entry[1] + ',';
    }

    return sString === tString;
}


// var isIsomorphic = function(s, t) {
//     let st = new Map();
//     let ts = new Map();

//     for (let i = 0; i < s.length; i++) {
//         if (!st.has(s[i])) {
//             st.set(s[i], t[i]);
//         } else {
//             if (st.get(s[i]) !== t[i]) {
//                 return false;
//             }
//         }

//         if (!ts.has(t[i])) {
//             ts.set(t[i], s[i]);
//         } else {
//             if (ts.get(t[i]) !== s[i]) {
//                 return false;
//             }
//         }
//     }

//     return true;
// }