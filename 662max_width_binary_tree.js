// https://leetcode.com/problems/maximum-width-of-binary-tree/

const { Queue } = require('@datastructures-js/queue');

var widthOfBinaryTree = function(root) {
    const queue = new Queue();
    queue.enqueue([root, 1]);

    let max = 1;

    while (queue.size() > 0) {
        const length = queue.size();
        let start = null;
        let end = null;
        for (let i = 0; i < length; i++) {
            const [node, index] = queue.dequeue();
            if (node.left) {
                if (start === null) {
                    start = BigInt(index) * 2n;
                } else {
                    end = BigInt(index) * 2n;
                }
                queue.enqueue([node.left, BigInt(index) * 2n]);
            }
            if (node.right) {
                if (start === null) {
                    start = (BigInt(index) * 2n) + 1n;
                } else {
                    end = (BigInt(index) * 2n) + 1n;
                }
                queue.enqueue([node.right, (BigInt(index) * 2n) + 1n]);
            }
        }
        let num = 0;
        if (start === null) {
            num = 0;
        } else if (end === null){
            num = 1
        } else {
            num = end - start + 1n;
        }
        if (num > max) {
            max = num;
        }
    }

    return max;
};