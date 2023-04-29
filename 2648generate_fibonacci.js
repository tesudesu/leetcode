// https://leetcode.com/problems/generate-fibonacci-sequence/

var fibGenerator = function*() {
    let a = 0;
    let b = 1;
    yield a;
    yield b;
    while (true) {
        yield a + b;
        let tempA = a;
        a = b;
        b = tempA + b;
    }
};