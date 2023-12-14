// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array/

// O(n) time

var findSpecialInteger = function(arr) {
    const minTimes = Math.floor(arr.length / 4) + 1;
    let count = 1;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            count++;
        } else {
            if (count >= minTimes) {
                return arr[i - 1];
            }
            count = 1;
        }
    }

    if (count >= minTimes) {
        return arr[arr.length - 1];
    }
};


// O(logn) time

var findSpecialInteger = function(arr) {
    const minTimes = Math.floor(arr.length / 4) + 1;
    let candidates = [];
    let i = minTimes - 1;
    while (i < arr.length) {
        candidates.push(i);
        i += minTimes;
    }

    for (candidateIndex of candidates) {
        const candidate = arr[candidateIndex];
        let left;
        let right;

        let start = 0;
        let end = candidateIndex - 1;

        while (start <= end) {
            const mid = Math.floor((end - start) / 2) + start;

            if (arr[mid] === candidate) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

        left = start;

        start = candidateIndex + 1;
        end = arr.length - 1;

        while (start <= end) {
            const mid = Math.floor((end - start) / 2) + start;

            if (arr[mid] === candidate) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        right = end;

        if (right - left + 1 >= minTimes) {
            return candidate;
        }
    }
};