"use strict";
let guestslist = ["ali", "rehman", "kamran", "rehan"];
let wontcome = guestslist[1];
console.log(wontcome, "will enable to join");
guestslist.splice(1, 1, "imran");
guestslist.forEach(guest => console.log(`i would like ${guest} to invite on a dinner`));
