// https://leetcode.com/problems/maximize-the-number-of-target-nodes-after-connecting-trees-i/

var maxTargetNodes = function(edges1, edges2, k) {
    let map1 = new Map();
    let map2 = new Map();

    for (const [a, b] of edges1) {
        if (map1.has(a)) {
            let arr = map1.get(a);
            arr.push(b);
            map1.set(a, arr);
        } else {
            map1.set(a, [b]);
        }
        if (map1.has(b)) {
            let arr = map1.get(b);
            arr.push(a);
            map1.set(b, arr);
        } else {
            map1.set(b, [a]);
        }
    }

    for (const [a, b] of edges2) {
        if (map2.has(a)) {
            let arr = map2.get(a);
            arr.push(b);
            map2.set(a, arr);
        } else {
            map2.set(a, [b]);
        }
        if (map2.has(b)) {
            let arr = map2.get(b);
            arr.push(a);
            map2.set(b, arr);
        } else {
            map2.set(b, [a]);
        }
    }

    let dist1 = Array(edges1.length + 1).fill(1);

    for (let i = 0; i < dist1.length; i++) {
        let arr = [i];
        let visited = Array(dist1.length).fill(false);
        visited[i] = true;
        for (let j = 0; j < k; j++) {
            let newArr = [];
            let length = arr.length;
            for (let m = 0; m < length; m++) {
                let curr = arr.pop();
                if (!map1.has(curr)) continue;
                let nextNodes = map1.get(curr);
                for (let node of nextNodes) {
                    if (visited[node]) continue;
                    newArr.push(node);
                    visited[node] = true;
                }
            }
            dist1[i] += newArr.length;
            arr = newArr;
        }
    }

    let dist2 = Array(edges2.length + 1).fill(1);

    for (let i = 0; i < dist2.length; i++) {
        let arr = [i];
        let visited = Array(dist2.length).fill(false);
        visited[i] = true;
        for (let j = 1; j < k; j++) {
            let newArr = [];
            let length = arr.length;
            for (let m = 0; m < length; m++) {
                let curr = arr.pop();
                if (!map2.has(curr)) continue;
                let nextNodes = map2.get(curr);
                for (let node of nextNodes) {
                    if (visited[node]) continue;
                    newArr.push(node);
                    visited[node] = true;
                }
            }
            dist2[i] += newArr.length;
            arr = newArr;
        }
    }

    if (k === 0) {
        return dist1;
    }

    let max = Math.max(...dist2);

    for (let i = 0; i < dist1.length; i++) {
        dist1[i] += max;
    }

    return dist1;
};