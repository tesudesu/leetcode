// https://leetcode.com/problems/minimum-number-of-operations-to-make-array-xor-equal-to-k/

var minOperations = function(nums, k) {
    let xorAll = 0;

    for (let i = 0; i < nums.length; i++) {
        xorAll = xorAll ^ nums[i];
    }

    let tot = 0;

    while (k > 0 || xorAll > 0) {
        const kEnd = k & 1;
        const allEnd = xorAll & 1;
        if (kEnd !== allEnd) {
            tot++;
        }
        k = k >> 1;
        xorAll = xorAll >> 1;
    }

    return tot;
};


var minOperations = function(nums, k) {
    const countBits = Array(32).fill(0);

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        let j = countBits.length - 1;
        
        while (num > 0) {
            if (num & 1 === 1) {
                countBits[j]++;
            }
            num = num >> 1;
            j--;
        }
    }

    const pos = Array(32).fill(0);
    let j = pos.length - 1;

    while (k > 0) {
        if (k & 1 === 1) {
            pos[j] = 1;
        }
        k = k >> 1;
        j--;
    }

    let tot = 0;

    for (let i = pos.length - 1; i >= 0; i--) {
        if (pos[i] === 1) {
            if (countBits[i] % 2 === 0) {
                tot++;
            }
        } else {
            if (countBits[i] % 2 !== 0) {
                tot++;
            }
        }
    }

    return tot;
};