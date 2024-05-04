"use strict";
function excuteCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
const add = (a, b) => {
    console.log(a + b);
};
excuteCallback(add, 5, 10);
