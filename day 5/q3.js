var guestslist = ["ali", "rehman", "kamran", "rehan"];
var wontcome = guestslist[1];
console.log(wontcome, "will enable to join");
guestslist.splice(1, 1, "imran");
guestslist.forEach(function (guest) { return console.log("i would like ".concat(guest, " to invite on a dinner")); });
