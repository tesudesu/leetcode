// https://leetcode.com/problems/maximum-odd-binary-number/

var maximumOddBinaryNumber = function(s) {
    let ones = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === "1") {
            ones++;
        }
    }

    let zeroes = s.length - ones;

    ones--;

    let str = [];

    for (let i = 0; i < ones; i++) {
        str.push("1");
    }

    for (let i = 0; i < zeroes; i++) {
        str.push("0");
    }

    str.push("1");

    return str.join("");
};


var maximumOddBinaryNumber = function(s) {
    const arr = s.split("");

    let left = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === "1") {
            arr[i] = arr[left];
            arr[left] = "1";
            left++;
        }
    }

    const temp = arr[arr.length - 1];
    arr[arr.length - 1] = arr[left - 1];
    arr[left - 1] = temp;

    return arr.join("");
};


// var maximumOddBinaryNumber = function(s) {
//     let ones = 0;

//     for (let i = 0; i < s.length; i++) {
//         if (s[i] === "1") ones++;
//     }

//     let res = "";

//     for (let i = 0; i < ones - 1; i++) {
//         res += "1";
//     }

//     const remain = s.length - ones;

//     for (let i = 0; i < remain; i++) {
//         res += "0";
//     }

//     res += "1";

//     return res;
// };