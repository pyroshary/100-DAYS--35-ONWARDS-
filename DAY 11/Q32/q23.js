//array of old user names
var oldusers = ["rehman", "imran", "kamran", "REHAN", "ali"];
//array of new user names
var newusers = ["ayesha", "alia", "zoya", "rehan", "hira"];
//loop for new users and printing message for both
newusers.forEach(function (new1user) {
    if (oldusers.some(function (olduser) { return olduser.toLowerCase() === new1user.toLowerCase(); })) {
        console.log("sorry ".concat(new1user, " is not available"));
    }
    else {
        console.log("Yes this username ".concat(new1user, " is available"));
    }
});
