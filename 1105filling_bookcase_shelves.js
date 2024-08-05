// https://leetcode.com/problems/filling-bookcase-shelves/

var minHeightShelves = function(books, shelfWidth) {
    const cache = Array(books.length).fill().map(() => Array(shelfWidth + 1).fill(-1));

    const dfs = (i, width, height) => {
        const [currWidth, currHeight] = books[i];

        if (i === books.length - 1) {
            if (currWidth + width <= shelfWidth) {
                return Math.max(height, currHeight);
            } else {
                return height + currHeight;
            }
        }

        if (cache[i][width] !== -1) {
            return cache[i][width];
        }

        let ans = height + dfs(i + 1, currWidth, currHeight);

        if (currWidth + width <= shelfWidth) {
            ans = Math.min(ans, dfs(i + 1, currWidth + width, Math.max(height, currHeight)));
        }

        cache[i][width] = ans;
        
        return ans;
    }

    return dfs(0, 0, 0);
};


var minHeightShelves = function(books, shelfWidth) {
    const cache = Array(books.length).fill(-1);

    const dfs = (i) => {
        if (i === books.length) {
            return 0;
        }

        if (cache[i] !== -1) {
            return cache[i];
        }

        let width = 0;
        let height = 0;
        let ans = Infinity;

        for (let j = i; j < books.length; j++) {
            const [currWidth, currHeight] = books[j];
            if (width + currWidth > shelfWidth) {
                break;
            }
            width += currWidth;
            height = Math.max(height, currHeight);
            ans = Math.min(ans, height + dfs(j + 1));
        }

        cache[i] = ans;

        return ans;
    }

    return dfs(0);
};


var minHeightShelves = function(books, shelfWidth) {
    const dp = Array(books.length + 1).fill(Infinity);
    dp[dp.length - 1] = 0;

    for (let i = books.length - 1; i >= 0; i--) {
        let width = 0;
        let height = 0;
        for (let j = i; j < books.length; j++) {
            const [currWidth, currHeight] = books[j];
            if (width + currWidth > shelfWidth) {
                break;
            }
            width += currWidth;
            height = Math.max(height, currHeight);
            dp[i] = Math.min(dp[i], dp[j + 1] + height);
        }
    }

    return dp[0];
};