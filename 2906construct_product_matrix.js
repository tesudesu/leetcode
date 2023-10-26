// https://leetcode.com/problems/construct-product-matrix/

var constructProductMatrix = function (grid) {
    let prefixProduct = Array(grid.length).fill().map(() => Array(grid[0].length).fill());
    prefixProduct[0][0] = BigInt(grid[0][0]);

    let suffixProduct = Array(grid.length).fill().map(() => Array(grid[0].length).fill());
    suffixProduct[suffixProduct.length - 1][suffixProduct[0].length - 1] = BigInt(grid[grid.length - 1][grid[0].length - 1]);

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (i === 0 && j === 0) continue;

            if (j === 0) {
                prefixProduct[i][j] = (BigInt(grid[i][j]) * prefixProduct[i - 1][prefixProduct[0].length - 1]) % BigInt(12345);
            } else {
                prefixProduct[i][j] = (BigInt(grid[i][j]) * prefixProduct[i][j - 1]) % BigInt(12345);
            }
        }
    }

    for (let i = grid.length - 1; i >= 0; i--) {
        for (let j = grid[0].length - 1; j >= 0; j--) {
            if (i === grid.length - 1 && j === grid[0].length - 1) continue;

            if (j === grid[0].length - 1) {
                suffixProduct[i][j] = (BigInt(grid[i][j]) * suffixProduct[i + 1][0]) % BigInt(12345);
            } else {
                suffixProduct[i][j] = (BigInt(grid[i][j]) * suffixProduct[i][j + 1]) % BigInt(12345);
            }
        }
    }

    let res = Array(grid.length).fill().map(() => Array(grid[0].length).fill());

    for (let i = 0; i < res.length; i++) {
        for (let j = 0; j < res[0].length; j++) {
            if (j === 0 && i === 0) {
                if (j + 1 < res[0].length) {
                    res[i][j] = suffixProduct[0][j + 1] % BigInt(12345);
                } else {
                    res[i][j] = suffixProduct[i + 1][0] % BigInt(12345);
                }
            } else if (j === res[0].length - 1 && i === res.length - 1) {
                if (j - 1 >= 0) {
                    res[i][j] = prefixProduct[i][j - 1] % BigInt(12345);
                } else {
                    res[i][j] = prefixProduct[i - 1][prefixProduct[0].length - 1] % BigInt(12345);
                }
            } else {
                if (j - 1 >= 0) {
                    if (j + 1 < res[0].length) {
                        res[i][j] = (prefixProduct[i][j - 1] * suffixProduct[i][j + 1]) % BigInt(12345);
                    } else {
                        res[i][j] = (prefixProduct[i][j - 1] * suffixProduct[i + 1][0]) % BigInt(12345);
                    } 
                } else {
                    if (j + 1 < res[0].length) {
                        res[i][j] = (prefixProduct[i - 1][prefixProduct[0].length - 1] * suffixProduct[i][j + 1]) % BigInt(12345);
                    } else {
                        res[i][j] = (prefixProduct[i - 1][prefixProduct[0].length - 1] * suffixProduct[i + 1][0]) % BigInt(12345);
                    }
                }
            }
        }
    }

    return res;
};