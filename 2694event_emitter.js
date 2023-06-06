// https://leetcode.com/problems/event-emitter/

class EventEmitter {
    constructor() {
        this.events = {};
        this.num = 1;
    }

    subscribe(event, cb) {
        const key = this.num;
        this.events[key] = {event: event, cb: cb};
        this.num++;
        return {
            unsubscribe: () => {
                delete this.events[key];
                return undefined;
            }
        };
    }

    emit(event, args = []) {
        let res = [];
        for (const key in this.events) {
            if (this.events[key].event == event) {
                const output = this.events[key].cb(...args);
                res.push(output);
            }
        }
        return res;
    }
}