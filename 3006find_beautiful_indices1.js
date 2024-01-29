// https://leetcode.com/problems/find-beautiful-indices-in-the-given-array-i/

var beautifulIndices = function(s, a, b, k) {
    let aIndices = [];
    let bIndices = [];

    for (let i = 0; i < s.length; i++) {
        let founda = true;
        let foundb = true;

        let k = 0;
        for (let j = i; j < i + a.length; j++) {
            if (s[j] !== a[k]) {
                founda = false;
                break;
            }
            k++;
        }

        k = 0;
        for (let j = i; j < i + b.length; j++) {
            if (s[j] !== b[k]) {
                foundb = false;
                break;
            }
            k++;
        }

        if (founda) {
            aIndices.push(i);
        }
        if (foundb) {
            bIndices.push(i);
        }
    }

    let ans = [];

    for (let i = 0; i < aIndices.length; i++) {
        for (let j = 0; j < bIndices.length; j++) {
            if (Math.abs(aIndices[i] - bIndices[j]) <= k) {
                ans.push(aIndices[i]);
                break;
            }
        }
    }

    return ans;
};