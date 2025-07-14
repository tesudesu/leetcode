// https://leetcode.com/problems/zero-array-transformation-iii/

var maxRemoval = function(nums, queries) {
    queries.sort((a, b) => a[0] - b[0]);
    const candidates = new MaxPriorityQueue();
    const chosen = new MinPriorityQueue();
    let totChosen = 0;

    let j = 0;

    for (let i = 0; i < nums.length; i++) {
        let num = nums[i];
        while (j < queries.length && queries[j][0] === i) {
            candidates.enqueue(queries[j][1]);
            j++;
        }

        num -= chosen.size();

        while (num > 0 && candidates.size() > 0) {
            let candidate = candidates.dequeue();
            if (candidate >= i) {
                chosen.enqueue(candidate);
                totChosen++;
                num--;
            }
        }

        if (num > 0) {
            return -1;
        }

        while (chosen.size() > 0 && chosen.front() === i) {
            chosen.dequeue();
        }
    }

    return queries.length - totChosen;
};