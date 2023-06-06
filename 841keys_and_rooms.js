// https://leetcode.com/problems/keys-and-rooms/

var canVisitAllRooms = function(rooms) {

    let visited = new Set();

    let toVisit = [...rooms[0]];

    while (toVisit.length > 0) {
        let curr = toVisit.pop();
        visited.add(curr);
        for (let i = 0; i < rooms[curr].length; i++) {
            if (!visited.has(rooms[curr][i])) toVisit.push(rooms[curr][i]);
        }
    }

    for (let i = 1; i < rooms.length; i++) {
        if (!visited.has(i)) return false;
    }

    return true;
};