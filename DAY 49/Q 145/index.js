function excuteCallback(callback, arg1, arg2) {
    callback(arg1, arg2);
}
var add = function (a, b) {
    console.log(a + b);
};
excuteCallback(add, 5, 10);
