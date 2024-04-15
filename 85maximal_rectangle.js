// https://leetcode.com/problems/maximal-rectangle/

// Brute force

var maximalRectangle = function(matrix) {
    let max = 0;

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === "0") continue;
            let maxHeight = matrix.length - i;
            for (let w = j; w < matrix[0].length; w++) {
                for (let x = i; x < i + maxHeight; x++) {
                    if (matrix[x][w] === "0") {
                        maxHeight = x - i;
                        break;
                    }
                }
                max = Math.max(max, maxHeight * (w - j + 1));
            }
        }
    }

    return max;
};


var maximalRectangle = function(matrix) {
    let max = 0;
    const arr = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === "0") continue;

            arr[i][j] = j === 0 ? 1 : arr[i][j - 1] + 1;
        }
    }

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[0].length; j++) {
            if (arr[i][j] === 0) continue;
            let width = arr[i][j];
            for (let k = i; k >= 0; k--) {
                width = Math.min(width, arr[k][j]);
                max = Math.max(max, width * (i - k + 1));
            }
        }
    }

    return max;
};


// Stack

var maximalRectangle = function(matrix) {
    let max = 0;
    const arr = Array(matrix.length).fill().map(() => Array(matrix[0].length).fill(0));

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === "0") continue;

            arr[i][j] = j === 0 ? 1 : arr[i][j - 1] + 1;
        }
    }

    for (let j = 0; j < arr[0].length; j++) {
        let stack = [-1];

        for (let i = 0; i < arr.length; i++) {
            while (stack[stack.length - 1] !== -1 && arr[i][j] < arr[stack[stack.length - 1]][j]) {
                const curr = stack.pop();
                const width = i - stack[stack.length - 1] - 1;
                max = Math.max(max, arr[curr][j] * width);
            }
            stack.push(i);
        }

        while (stack[stack.length - 1] !== -1) {
            const curr = stack.pop();
            const width = arr.length - stack[stack.length - 1] - 1;
            max = Math.max(max, arr[curr][j] * width);
        }
    }

    return max;
};