//https://leetcode.com/problems/sort-integers-by-the-number-of-1-bits/

// Brian Kerninghan's algorithm

var sortByBits = function(arr) {
    const count1Bits = (num) => {
        let count = 0;
        while (num > 0) {
            num = num & (num - 1);
            count++;
        }
        return count;
    }
    
    arr.sort((a, b) => {
        const aBits = count1Bits(a);
        const bBits = count1Bits(b);
        if (aBits < bBits) {
            return -1;
        } else if (aBits > bBits) {
            return 1;
        } else {
            return a <= b ? -1 : 1;
        }
    });

    return arr;
};


// var sortByBits = function(arr) {
//     const count1Bits = (num) => {
//         let count = 0;
//         while (num > 0) {
//             if (num & 1 === 1) {
//                 count++;
//             }
//             num = num >> 1;
//         }
//         return count;
//     }
    
//     arr.sort((a, b) => {
//         const aBits = count1Bits(a);
//         const bBits = count1Bits(b);
//         if (aBits < bBits) {
//             return -1;
//         } else if (aBits > bBits) {
//             return 1;
//         } else {
//             return a <= b ? -1 : 1;
//         }
//     });

//     return arr;
// };


// var sortByBits = function(arr) {
//     const count1Bits = (num) => {
//         let count = 0;
//         let mask = 1;
//         while (num > 0) {
//             if ((num & mask) > 0) {
//                 count++;
//                 num = num ^ mask;
//             }
//             mask = mask << 1;
//         }
//         return count;
//     }
    
//     arr.sort((a, b) => {
//         const aBits = count1Bits(a);
//         const bBits = count1Bits(b);
//         if (aBits < bBits) {
//             return -1;
//         } else if (aBits > bBits) {
//             return 1;
//         } else {
//             return a <= b ? -1 : 1;
//         }
//     });

//     return arr;
// };
