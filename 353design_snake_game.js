// https://leetcode.com/problems/design-snake-game/

const hash = (x, y) => {
    return (x << 16) | y;
}


var SnakeGame = function(width, height, food) {
    this.x = height;
    this.y = width;

    this.occupied = new Set();
    this.occupied.add(hash(0, 0));

    this.foodLoc = new Queue();
    for (const loc of food) {
        this.foodLoc.enqueue(loc);
    }

    this.tail = new Queue();
    this.tail.enqueue([0, 0]);

    this.currX = 0;
    this.currY = 0;

    this.gameOver = false;
    this.points = 0;
};

/** 
 * @param {string} direction
 * @return {number}
 */
SnakeGame.prototype.move = function(direction) {
    if (this.gameOver) return -1;
    if (direction === "U") {
        this.currX -= 1;
        if (this.currX < 0) {
            this.gameOver = true;
            return -1;
        }
    } else if (direction === "D") {
        this.currX += 1;
        if (this.currX === this.x) {
            this.gameOver = true;
            return -1;
        }
    } else if (direction === "R") {
        this.currY += 1;
        if (this.currY === this.y) {
            this.gameOver = true;
            return -1;
        }
    } else {
        this.currY -= 1;
        if (this.currY < 0) {
            this.gameOver = true;
            return -1;
        }
    }
    let loc = hash(this.currX, this.currY);
    if (this.foodLoc.size() > 0 && this.foodLoc.front()[0] === this.currX && this.foodLoc.front()[1] === this.currY) {
        this.points++;
        this.foodLoc.dequeue();
        this.tail.enqueue([this.currX, this.currY]);
        this.occupied.add(loc);
    } else {
        let [lastX, lastY] = this.tail.dequeue();
        this.occupied.delete(hash(lastX, lastY));
        if (this.occupied.has(loc)) {
            this.gameOver = true;
            return -1;
        }
        this.tail.enqueue([this.currX, this.currY]);
        this.occupied.add(loc);
    }
    return this.points;
};