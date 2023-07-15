// https://leetcode.com/problems/search-a-2d-matrix/

var searchMatrix = function(matrix, target) {
    let start = 0;
    let end = matrix.length - 1;

    while (start <= end) {
        let mid = Math.floor((end - start) / 2) + start;

        if (matrix[mid][0] === target) {
            return true;
        }

        if (target < matrix[mid][0]) {
            end = mid - 1;
            continue;
        }

        if (target > matrix[mid][0]) {
            if (target <= matrix[mid][matrix[0].length - 1]) {
                let start2 = 0;
                let end2 = matrix[0].length - 1;
                while (start2 <= end2) {
                    let mid2 = Math.floor((end2 - start2) / 2) + start2;

                    if (matrix[mid][mid2] === target) {
                        return true;
                    }

                    if (matrix[mid][mid2] > target) {
                        end2 = mid2 - 1;
                        continue;
                    }

                    if (matrix[mid][mid2] < target) {
                        start2 = mid2 + 1;
                        continue;
                    }
                }
                return false;
            } else {
                start = mid + 1;
                continue;
            }
        }
    }
    return false;
};