var User = /** @class */ (function () {
    function User(value) {
        this.value = value;
    }
    User.prototype.show = function (msg) {
        console.log("".concat(msg, " - ").concat(this.value));
    };
    return User;
}());
var userOne = new User("Shary");
console.log(userOne.value);
;
userOne.show("message");
var userTwo = new User(100);
console.log(userTwo.value);
userTwo.show("message");
