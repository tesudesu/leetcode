// https://leetcode.com/problems/count-beautiful-substrings-ii/

var beautifulSubstrings = function(s, k) {
    let newK;
    for (let i = 1; i <= 4 * k; i++) {
        if ((i * i) % (4 * k) === 0) {
            newK = i;
            break;
        }
    }

    // L (j - i) is divisible by newK
    // j % newK = i % newK

    let map = new Map();
    map.set(`0,0`, 1);
    let sum = 0;
    const vowels = new Set(["a", "e", "i", "o", "u"]);
    let tot = 0;

    for (let i = 0; i < s.length; i++) {
        if (vowels.has(s[i])) {
            sum++;
        } else {
            sum--;
        }

        let string = `${sum},${(i + 1) % newK}`;
        tot += map.get(string) || 0;
        map.set(string, (map.get(string) + 1) || 1);
    }

    return tot;
};


// var beautifulSubstrings = function(s, k) {
//     let map = new Map();
//     map.set(0, [-1]);
//     let sum = 0;
//     const vowels = new Set(["a", "e", "i", "o", "u"]);
//     let tot = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (vowels.has(s[i])) {
//             sum++;
//         } else {
//             sum--;
//         }
//         if (map.has(sum)) {
//             let indices = map.get(sum);
//             for (let j = 0; j < indices.length; j++) {
//                 let length = i - indices[j];
//                 if (((length / 2) * (length / 2)) % k === 0) {
//                     tot++;
//                 }
//             }
//             indices.push(i);
//             map.set(sum, indices);
//         } else {
//             map.set(sum, [i]);
//         }
//     }

//     return tot;
// };