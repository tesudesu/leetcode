// https://leetcode.com/problems/convert-object-to-json-string/

var jsonStringify = function (object) {
    let string = "";
    if (typeof object === "string") {
        string += `"${String(object)}"`;
    }
    if (typeof object === "boolean" || typeof object === "number" || object === null) {
        string += `${String(object)}`;
    }
    if (Array.isArray(object)) {
        string += "[";

        for (let i = 0; i < object.length; i++) {
            string += jsonStringify(object[i]);
            if (i !== object.length-1) {
                string += ",";
            }
        }

        string += "]";
    } else if (typeof object === "object" && object !== null) {
        string += '{';

        const keys = Object.keys(object);

        for (let i = 0; i < keys.length; i++) {
            string += `"${keys[i]}":` + `${jsonStringify(object[keys[i]])}`;
            if (i !== keys.length-1) {
                string += ",";
            }
        }

        string += '}';
    }

    return string;
};