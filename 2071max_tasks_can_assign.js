// https://leetcode.com/problems/maximum-number-of-tasks-you-can-assign/

var maxTaskAssign = function(tasks, workers, pills, strength) {
    tasks.sort((a, b) => b - a);
    workers.sort((a, b) => b - a);
    
    let start = 0;
    let end = tasks.length;
    let ans = 0;

    const isPossible = (index) => {
        let taskIndex = tasks.length - index;
        let currPills = pills;
        let workerIndex = 0;
        let ableWorkers = new Deque();

        while (taskIndex < tasks.length) {
            while (workerIndex < workers.length && workers[workerIndex] + strength >= tasks[taskIndex]) {
                ableWorkers.pushBack(workers[workerIndex]);
                workerIndex++;
            }
            if (ableWorkers.size() === 0) return false;
            if (ableWorkers.front() >= tasks[taskIndex]) {
                ableWorkers.popFront();
            } else if (currPills > 0) {
                ableWorkers.popBack();
                currPills--;
            } else {
                return false;
            }
            taskIndex++;
        }

        return true;
    }

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);

        if (isPossible(mid)) {
            start = mid + 1;
            ans = mid;
        } else {
            end = mid - 1;
        }
    }

    return ans;
};