// https://leetcode.com/problems/find-in-mountain-array/

var findInMountainArray = function(target, mountainArr) {
    const length = mountainArr.length();
    
    let start = 0;
    let end = length - 1;

    let peak;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        const curr = mountainArr.get(mid);
        const before = mountainArr.get(mid - 1);
        const after = mountainArr.get(mid + 1);

        if (curr > before && curr > after) {
            if (curr === target) return mid;
            peak = mid;
            break;
        } else if (curr < after) {
            start = mid + 1;
        } else if (curr < before) {
            end = mid - 1;
        }
    }

    start = 0;
    end = peak - 1;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        const curr = mountainArr.get(mid);

        if (curr === target) {
            return mid;
        } else if (curr > target) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    start = peak + 1;
    end = length - 1;

    while (start <= end) {
        const mid = Math.floor((end - start) / 2) + start;

        const curr = mountainArr.get(mid);

        if (curr === target) {
            return mid;
        } else if (curr > target) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
};