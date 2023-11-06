// https://leetcode.com/problems/random-pick-with-weight/

// Approach 1

var Solution = function(w) {
    let prob = Array(w.length).fill();
    let sum = 0;

    for (let i = 0; i < w.length; i++) {
        sum += w[i];
    }

    for (let i = 0; i < w.length; i++) {
        prob[i] = Math.round((w[i] / sum) * 1000);
    }

    this.indices = Array(1000).fill(0);
    let ind = 0;

    for (let i = 0; i < prob.length; i++) {
        for (let j = 0; j < prob[i]; j++) {
            this.indices[ind] = i;
            ind++;
        }
    }
};

Solution.prototype.pickIndex = function() {
    return this.indices[Math.floor(Math.random() * 1000)];
};


// Approach 2

var Solution = function(w) {
    this.prefixSums = Array(w.length).fill();
    this.prefixSums[0] = w[0];
    this.sum = w[0];

    for (let i = 1; i < w.length; i++) {
        this.prefixSums[i] = w[i] + this.prefixSums[i - 1];
        this.sum += w[i];
    }
};

Solution.prototype.pickIndex = function() {
    const randomValue = Math.floor(Math.random() * this.sum);

    for (let i = 0; i < this.prefixSums.length; i++) {
        if (randomValue < this.prefixSums[i]) {
            return i;
        }
    }
};


// Approach 3

var Solution = function(w) {
    this.prefixSums = Array(w.length).fill();
    this.prefixSums[0] = w[0];
    this.sum = w[0];

    for (let i = 1; i < w.length; i++) {
        this.prefixSums[i] = w[i] + this.prefixSums[i - 1];
        this.sum += w[i];
    }
};

Solution.prototype.pickIndex = function() {
    const randomValue = Math.floor(Math.random() * this.sum);

    let start = 0;
    let end = this.prefixSums.length - 1;

    while (start < end) {
        const mid = Math.floor((end - start) / 2) + start;

        if (randomValue < this.prefixSums[mid]) {
            end = mid;
        } else {
            start = mid + 1;
        }
    }

    return end;
};