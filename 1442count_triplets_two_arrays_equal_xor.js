// https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/

// O(n) time

var countTriplets = function(arr) {
    let prefixXOR = 0;
    const countOfXOR = new Map();
    countOfXOR.set(0, 1);
    const sumOfIndices = new Map();
    sumOfIndices.set(0, 0);
    let tot = 0;

    for (let i = 0; i < arr.length; i++) {
        prefixXOR ^= arr[i];
        if (countOfXOR.has(prefixXOR)) {
            const count = countOfXOR.get(prefixXOR);
            const validSubarrays = count * 1 + sumOfIndices.get(prefixXOR);
            tot += (count * (i+1) - validSubarrays);
        }
        countOfXOR.set(prefixXOR, (countOfXOR.get(prefixXOR) + 1) || 1);
        sumOfIndices.set(prefixXOR, (sumOfIndices.get(prefixXOR) + i + 1)|| i + 1);
    }

    return tot;
};


// O(n^2) time

var countTriplets = function(arr) {
    let count = 0;

    for (let i = 0; i < arr.length; i++) {
        let cumulativeXOR = 0;
        for (let j = i; j < arr.length; j++) {
            cumulativeXOR ^= arr[j];
            if (cumulativeXOR === 0) {
                count += (j - i);
            }
        }
    }

    return count;
};


// O(n^3) time

var countTriplets = function(arr) {
    let count = 0;

    for (let start = 0; start < arr.length - 1; start++) {
        let a = 0;
        for (let i = start; i < arr.length - 1; i++) {
            a = a ^ arr[i];
            let b = 0;
            for (let j = i + 1; j < arr.length; j++) {
                b = b ^ arr[j];
                if (a === b) {
                    count++;
                }
            }
        }
    }

    return count;
};