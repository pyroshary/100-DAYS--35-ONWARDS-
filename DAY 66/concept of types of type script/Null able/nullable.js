var username = 'Glitcher';
var ageEX = null;
function greetUser(username) {
    if (username === null) {
        console.log('Hello ! guest');
    }
    else {
        console.log("Hello ".concat(username, "!"));
    }
}
greetUser("Glitc");
greetUser(null);
