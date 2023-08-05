// https://leetcode.com/problems/unique-paths-ii/

var uniquePathsWithObstacles = function(obstacleGrid) {
    let skipRow = false;
    let skipCol = false;

    for (let i = 0; i < obstacleGrid.length; i++) {
        for (let j = 0; j < obstacleGrid[0].length; j++) {
            if (i === 0 && j === 0) {
                if (obstacleGrid[i][j] === 0) {
                    obstacleGrid[i][j] = 1;
                } else {
                    return 0;
                }
            } else if (i === 0) {
                if (!skipRow) {
                    if (obstacleGrid[i][j] === 0) {
                        obstacleGrid[i][j] = 1;
                    } else {
                        for (let k = j; k < obstacleGrid[0].length; k++) {
                            obstacleGrid[i][k] = 0;
                        }
                        skipRow = true;
                    }
                }
            } else if (j === 0) {
                if (!skipCol) {
                    if (obstacleGrid[i][j] === 0) {
                        obstacleGrid[i][j] = 1;
                    } else {
                        for (let k = i; k < obstacleGrid.length; k++) {
                            obstacleGrid[k][j] = 0;
                        }
                        skipCol = true;
                    }
                }
            } else {
                if (obstacleGrid[i][j] === 1) {
                    obstacleGrid[i][j] = 0;
                } else {
                    obstacleGrid[i][j] = obstacleGrid[i - 1][j] + obstacleGrid[i][j - 1];
                }
            }
        }
    }

    return obstacleGrid[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};