// https://leetcode.com/problems/maximum-square-area-by-removing-fences-from-a-field/

var maximizeSquareArea = function(m, n, hFences, vFences) {
    hFences.sort((a, b) => a - b);
    vFences.sort((a, b) => a - b);
    hFences.push(m);
    vFences.push(n);
    
    let hPossible = new Set();

    for (let i = 0; i < hFences.length; i++) {
        hPossible.add(hFences[i] - 1);
        for (let j = i + 1; j < hFences.length; j++) {
            hPossible.add(hFences[j] - hFences[i]);
        }
    }

    let maxSide = 0;

    for (let i = 0; i < vFences.length; i++) {
        if (hPossible.has(vFences[i] - 1)) {
            maxSide = Math.max(maxSide, vFences[i] - 1);
        }
        for (let j = i + 1; j < vFences.length; j++) {
            if (hPossible.has(vFences[j] - vFences[i])) {
                maxSide = Math.max(maxSide, vFences[j] - vFences[i]);
            }
        }
    }

    return maxSide === 0 ? -1 : BigInt(maxSide) * BigInt(maxSide) % BigInt(1e9 + 7);
};