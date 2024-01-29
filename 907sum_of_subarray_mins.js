// https://leetcode.com/problems/sum-of-subarray-minimums/

// O(n) time

var sumSubarrayMins = function(arr) {
    const n = arr.length;
    const smallerIndexFront = Array(n).fill(0);
    const smallerIndexBack = Array(n).fill(n); 
    let stack = [];

    for (let i = 0; i < n; i++) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] >= arr[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            smallerIndexFront[i] = stack[stack.length - 1] + 1;
        }
        stack.push(i);
    }

    stack = [];

    for (let i = n - 1; i >= 0; i--) {
        while (stack.length > 0 && arr[stack[stack.length - 1]] > arr[i]) {
            stack.pop();
        }

        if (stack.length > 0) {
            smallerIndexBack[i] = stack[stack.length - 1];
        }
        stack.push(i);
    }

    let sum = 0;

    for (let i = 0; i < n; i++) {
        const subarrays = (smallerIndexBack[i] - i) * (i - smallerIndexFront[i] + 1);
        sum = (sum + subarrays * arr[i]) % (1e9 + 7);
    }

    return sum;
};


var sumSubarrayMins = function(arr) {
    let sum = 0;
    let stack = [];

    for (let i = 0; i < arr.length; i++) {
        while (stack.length > 0 && stack[stack.length - 1][0] > arr[i]) {
            const [num, index] = stack.pop();
            const end = i - index;
            const start = stack.length === 0 ? index + 1 : index - stack[stack.length - 1][1];

            const subarrays = end * start;
            sum = (sum + subarrays * num) % (1e9 + 7);
        }

        stack.push([arr[i], i]);
    }

    while (stack.length > 0) {
        const [num, index] = stack.pop();
        const end = arr.length - index;
        const start = stack.length === 0 ? index + 1 : index - stack[stack.length - 1][1];

        const subarrays = end * start;
        sum = (sum + subarrays * num) % (1e9 + 7);
    }

    return sum;
};


// O(n^2) time

var sumSubarrayMins = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let currMin = arr[i];
        for (let j = i; j < arr.length; j++) {
            currMin = Math.min(currMin, arr[j]);
            sum = (sum + currMin) % (1e9 + 7);
        }
    }

    return sum;
};


var sumSubarrayMins = function(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        let end = arr.length;
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[i]) {
                end = j;
                break;
            }
        }

        let start = 0;
        for (let j = i - 1; j >= 0; j--) {
            if (arr[j] <= arr[i]) {
                start = j + 1;
                break;
            }
        }

        const subarrays = (end - i) * (i - start + 1);
        sum = (sum + subarrays * arr[i]) % (1e9 + 7);
    }

    return sum;
};