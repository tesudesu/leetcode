// https://leetcode.com/problems/add-binary/

var addBinary = function (a, b) {
    let res = "";

    let maxLength;
    let shorterInd;
    let shorter;
    let longer;
    if (a.length >= b.length) {
        maxLength = a.length;
        shorterInd = b.length - 1;
        shorter = b;
        longer = a;
    } else {
        maxLength = b.length;
        shorterInd = a.length - 1;
        shorter = a;
        longer = b;
    }
    let addOne = false;

    for (let i = maxLength - 1; i >= 0; i--) {
        let numOnes = 0;
        if (shorter[shorterInd] === "1") {
            numOnes++;
        }
        if (longer[i] === "1") {
            numOnes++;
        }
        if (numOnes === 2) {
            if (addOne) {
                res = "1" + res;
            } else {
                res = "0" + res;
                addOne = true;
            }
        } else if (numOnes === 1) {
            if (addOne) {
                res = "0" + res;
            } else {
                res = "1" + res;
            }
        } else {
            if (addOne) {
                res = "1" + res;
                addOne = false;
            } else {
                res = "0" + res;
            }
        }

        shorterInd--;
    }

    if (addOne) {
        res = "1" + res;
    }

    return res;
};