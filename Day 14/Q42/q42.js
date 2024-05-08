"use strict";
let magicians = ["Ali", "rehman", "kamran"];
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " is good magician";
    }
}
make_great(magicians);
show_magicians(magicians);
