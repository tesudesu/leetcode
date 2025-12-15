// https://leetcode.com/problems/design-movie-rental-system/

/**
 * @param {number} n
 * @param {number[][]} entries
 */
var MovieRentingSystem = function (n, entries) {
    this.numberOfShops = n;
    this.unrented = new Map(); // key is movie, value is a set of shops with the movie
    this.unrentedQueues = new Map(); // key is movie, value is [price, shop]
    this.shopAndMovie = new Map();
    this.rented = new Map();
    this.rentedQueue = new PriorityQueue((a, b) => { // [price, shop, movie]
        if (a[0] < b[0]) {
            return -1;
        } else if (a[0] > b[0]) {
            return 1;
        } else if (a[1] < b[1]) {
            return -1;
        } else if (a[1] > b[1]) {
            return 1;
        } else {
            return a[2] < b[2] ? -1 : 1;
        }
    });

    for (const [shop, movie, price] of entries) {
        if (this.unrentedQueues.has(movie)) {
            let queue = this.unrentedQueues.get(movie);
            queue.enqueue([price, shop]);
        } else {
            let queue = new PriorityQueue((a, b) => {
                if (a[0] < b[0]) {
                    return -1;
                } else if (a[0] > b[0]) {
                    return 1;
                } else {
                    return a[1] < b[1] ? -1 : 1;
                }
            })
            queue.enqueue([price, shop]);
            this.unrentedQueues.set(movie, queue);
        }

        if (this.unrented.has(movie)) {
            let set = this.unrented.get(movie);
            set.add(shop);
        } else {
            this.unrented.set(movie, new Set([shop]));
        }

        let str = `${shop},${movie}`;
        this.shopAndMovie.set(str, price);
    }
};

/** 
 * @param {number} movie
 * @return {number[]}
 */
MovieRentingSystem.prototype.search = function (movie) {
    if (!this.unrentedQueues.has(movie)) return [];

    let shops = this.unrentedQueues.get(movie);
    let rentedShops = new Set();

    if (this.rented.has(movie)) {
        rentedShops = this.rented.get(movie);
    }

    let ans = [];
    let temp = [];
    let ansSet = new Set();

    while (shops.size() > 0) {
        while (shops.size() > 0 && rentedShops.has(shops.front()[1])) {
            shops.dequeue();
        }
        if (shops.size() > 0) {
            const [price, shop] = shops.dequeue();
            if (!ansSet.has(shop)) {
                ansSet.add(shop);
                ans.push(shop);
                temp.push([price, shop]);
            }
        }
        if (temp.length === 5) break;
    }

    for (let i = 0; i < temp.length; i++) {
        shops.enqueue(temp[i]);
    }

    return ans;
};

/** 
 * @param {number} shop 
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.rent = function (shop, movie) {
    if (this.rented.has(movie)) {
        let set = this.rented.get(movie);
        set.add(shop);
    } else {
        this.rented.set(movie, new Set([shop]));
    }

    let str = `${shop},${movie}`;

    this.rentedQueue.enqueue([this.shopAndMovie.get(str), shop, movie]);
};

/** 
 * @param {number} shop 
 * @param {number} movie
 * @return {void}
 */
MovieRentingSystem.prototype.drop = function (shop, movie) {
    let set = this.rented.get(movie);
    set.delete(shop);

    let price = this.shopAndMovie.get(`${shop},${movie}`);
    this.unrentedQueues.get(movie).enqueue([price, shop]);
};

/**
 * @return {number[][]}
 */
MovieRentingSystem.prototype.report = function () {
    let temp = [];
    let ans = [];
    let ansSet = new Set();

    while (this.rentedQueue.size() > 0) { // [price, shop, movie]
        let currMovie = this.rentedQueue.front()[2];
        let currShop = this.rentedQueue.front()[1];
        let str = `${currShop},${currMovie}`;
        if (!ansSet.has(str) && this.rented.has(currMovie) && this.rented.get(currMovie).has(currShop)) {
            temp.push(this.rentedQueue.dequeue());
            ans.push([currShop, currMovie]);
            ansSet.add(str);
        } else {
            this.rentedQueue.dequeue();
        }

        if (ans.length === 5) {
            break;
        }
    }

    for (let i = 0; i < temp.length; i++) {
        this.rentedQueue.enqueue(temp[i]);
    }

    return ans;
};