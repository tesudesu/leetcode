// https://leetcode.com/problems/find-x-sum-of-all-k-long-subarrays-ii/

var findXSum = function (nums, k, x) {
    const minQueue = new PriorityQueue((a, b) => {
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else {
            return a[1] < b[1] ? -1 : 1;
        }
    })

    const maxQueue = new PriorityQueue((a, b) => {
        if (a[0] < b[0]) {
            return 1;
        } else if (a[0] > b[0]) {
            return -1;
        } else {
            return a[1] < b[1] ? 1 : -1;
        }
    })

    const minMap = new Map();
    const maxMap = new Map();

    for (let i = 0; i < k; i++) {
        maxMap.set(nums[i], (maxMap.get(nums[i]) || 0) + 1);
    }

    for (const [num, count] of maxMap) {
        maxQueue.enqueue([count, num]);
    }

    let currAns = 0;
    for (let i = 0; i < x && maxQueue.size() > 0; i++) {
        const [count, num] = maxQueue.dequeue();
        currAns += count * num;
        minQueue.enqueue([count, num]);
        minMap.set(num, count);
        maxMap.delete(num);
    }

    let ans = [];
    ans.push(currAns);

    for (let i = 1; i <= nums.length - k; i++) {
        let prev = nums[i - 1];
        let curr = nums[i + k - 1];
        
        if (minMap.has(prev)) {
            currAns -= prev;
            minMap.set(prev, minMap.get(prev) - 1);
            if (minMap.get(prev) === 0) {
                minMap.delete(prev);
            } else {
                minQueue.enqueue([minMap.get(prev), prev]);
            }
        } else {
            maxMap.set(prev, maxMap.get(prev) - 1);
            if (maxMap.get(prev) === 0) {
                maxMap.delete(prev);
            } else {
                maxQueue.enqueue([maxMap.get(prev), prev]);
            }
        }

        if (minMap.has(curr)) {
            minMap.set(curr, minMap.get(curr) + 1);
            minQueue.enqueue([minMap.get(curr), curr]);
            currAns += curr;
        } else {
            maxMap.set(curr, (maxMap.get(curr) + 1) || 1);
            maxQueue.enqueue([maxMap.get(curr), curr]);
        } 

        // Rebalance: ensure minMap has exactly x elements (or all if fewer than x exist)
        while (minMap.size < x && maxQueue.size() > 0) {
            while (maxQueue.size() > 0 && (!maxMap.has(maxQueue.front()[1]) || maxQueue.front()[0] !== maxMap.get(maxQueue.front()[1]))) {
                maxQueue.dequeue();
            }
            if (maxQueue.size() > 0) {
                const [count, num] = maxQueue.dequeue();
                minMap.set(num, count);
                maxMap.delete(num);
                minQueue.enqueue([count, num]);
                currAns += count * num;
            }
        }

        // Check if top of maxQueue should replace bottom of minQueue
        while (minQueue.size() > 0 && maxQueue.size() > 0) {
            while (minQueue.size() > 0 && (!minMap.has(minQueue.front()[1]) || minQueue.front()[0] !== minMap.get(minQueue.front()[1]))) {
                minQueue.dequeue();
            }
            while (maxQueue.size() > 0 && (!maxMap.has(maxQueue.front()[1]) || maxQueue.front()[0] !== maxMap.get(maxQueue.front()[1]))) {
                maxQueue.dequeue();
            }
            
            if (minQueue.size() > 0 && maxQueue.size() > 0) {
                const minTop = minQueue.front();
                const maxTop = maxQueue.front();
                
                if (maxTop[0] > minTop[0] || (maxTop[0] === minTop[0] && maxTop[1] > minTop[1])) {
                    minQueue.dequeue();
                    maxQueue.dequeue();
                    
                    currAns -= minTop[0] * minTop[1];
                    currAns += maxTop[0] * maxTop[1];
                    
                    minMap.delete(minTop[1]);
                    maxMap.delete(maxTop[1]);
                    minMap.set(maxTop[1], maxTop[0]);
                    maxMap.set(minTop[1], minTop[0]);
                    
                    minQueue.enqueue([maxTop[0], maxTop[1]]);
                    maxQueue.enqueue([minTop[0], minTop[1]]);
                } else {
                    break;
                }
            }
        }

        ans.push(currAns);
    }

    return ans;
};