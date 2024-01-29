// https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-ii/

// KMP

var beautifulIndices = function(s, a, b, k) {
    let aIndices = [];
    let bIndices = [];

    // Compute LPS array

    const aLPS = Array(a.length).fill();
    aLPS[0] = 0;
    const bLPS = Array(b.length).fill();
    bLPS[0] = 0;

    let len = 0;
    let i = 1;

    while (i < a.length) {
        if (a[i] === a[len]) {
            aLPS[i] = len + 1;
            len++;
            i++;
        } else {
            if (len !== 0) {
                len = aLPS[len - 1]
            } else {
                aLPS[i] = 0;
                i++;
            }
        }
    }

    len = 0;
    i = 1;

    while (i < b.length) {
        if (b[i] === b[len]) {
            bLPS[i] = len + 1;
            len++;
            i++;
        } else {
            if (len !== 0) {
                len = bLPS[len - 1]
            } else {
                bLPS[i] = 0;
                i++;
            }
        }
    }

    // Match

    // Pointer for string
    i = 0;
    // Pointer for section
    let j = 0;

    while (i < s.length) {
        if (s[i] === a[j]) {
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = aLPS[j - 1];
            } else {
                i++;
            }
        }
        if (j === a.length) {
            aIndices.push(i - j);
        }
    }

    i = 0;
    j = 0;

    while (i < s.length) {
        if (s[i] === b[j]) {
            i++;
            j++;
        } else {
            if (j !== 0) {
                j = bLPS[j - 1];
            } else {
                i++;
            }
        }
        if (j === b.length) {
            bIndices.push(i - j);
        }
    }

    let ans = [];

    for (let i = 0; i < aIndices.length; i++) {
        let start = 0;
        let end = bIndices.length - 1;

        while (start <= end) {
            const mid = Math.floor((end - start) / 2) + start;

            if (Math.abs(bIndices[mid] - aIndices[i]) <= k) {
                ans.push(aIndices[i]);
                break;
            }

            if (bIndices[mid] > aIndices[i]) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
    }

    return ans;
};